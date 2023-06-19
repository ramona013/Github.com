from .base import Browser, ExecutorBrowser, require_arg
from .base import get_timeout_multiplier   # noqa: F401
from ..executors import executor_kwargs as base_executor_kwargs
from ..executors.executorcdp import (CDPTestharnessExecutor,  # noqa: F401
                                     CDPRefTestExecutor)  # noqa: F401
from ..executors.executorchrome import ChromeDriverWdspecExecutor  # noqa: F401


__wptrunner__ = {"product": "chrome",
                 "check_args": "check_args",
                 "browser": "ChromeBrowser",
                 "executor": {"testharness": "CDPTestharnessExecutor",
                              "reftest": "CDPRefTestExecutor",
                              "wdspec": "ChromeDriverWdspecExecutor"},
                 "browser_kwargs": "browser_kwargs",
                 "executor_kwargs": "executor_kwargs",
                 "env_extras": "env_extras",
                 "env_options": "env_options",
                 "timeout_multiplier": "get_timeout_multiplier",}


cli_arguments = [
    # https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome_launcher.cc?l=70-75&rcl=50b9fd38ae9ca373dc8889637eb94a50eea7dc94
    "--disable-popup-blocking",
    # Although specified by the Chromedriver source code, the
    # `--enable-automation` option was found to interfere with certain
    # web-platform-tests, so it should not be specified here.
    #
    # https://github.com/web-platform-tests/wpt/pull/14922
    #"--enable-automation",
    "--ignore-certificate-errors",
    "--metrics-recording-only",

    # https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome_launcher.cc?l=77-92&rcl=50b9fd38ae9ca373dc8889637eb94a50eea7dc94
    "--disable-hang-monitor",
    "--disable-prompt-on-repost",
    "--disable-sync",
    "--no-first-run",
    "--disable-background-networking",
    "--disable-web-resources",
    "--disable-client-side-phishing-detection",
    "--disable-default-apps",
    "--enable-logging",
    "--log-level=0",
    "--password-store=basic",
    "--use-mock-keychain",
    "--test-type=webdriver",
    "--force-fieldtrials=SiteIsolationExtensions/Control",
]


def check_args(**kwargs):
    pass


def browser_kwargs(test_type, run_info_data, config, **kwargs):
    return {"binary": kwargs["binary"]}


def executor_kwargs(test_type, server_config, cache_manager, run_info_data,
                    **kwargs):
    executor_kwargs = base_executor_kwargs(test_type, server_config,
                                           cache_manager, run_info_data,
                                           **kwargs)
    executor_kwargs["close_after_done"] = True
    executor_kwargs["supports_eager_pageload"] = False

    capabilities = {
        "goog:chromeOptions": {
            "prefs": {
                "profile": {
                    "default_content_setting_values": {
                        "popups": 1
                    }
                }
            },
            "useAutomationExtension": False,
            "excludeSwitches": ["enable-automation"],
            "w3c": True
        }
    }


    if test_type == "testharness":
        capabilities["pageLoadStrategy"] = "none"

    chrome_options = capabilities["goog:chromeOptions"]
    if kwargs["binary"] is not None:
        chrome_options["binary"] = kwargs["binary"]

    # Here we set a few Chrome flags that are always passed.
    chrome_options["args"] = []
    # Allow audio autoplay without a user gesture.
    chrome_options["args"].append("--autoplay-policy=no-user-gesture-required")
    # Allow WebRTC tests to call getUserMedia.
    chrome_options["args"].append("--use-fake-ui-for-media-stream")
    chrome_options["args"].append("--use-fake-device-for-media-stream")
    # Shorten delay for Reporting <https://w3c.github.io/reporting/>.
    chrome_options["args"].append("--short-reporting-delay")
    # Point all .test domains to localhost for Chrome
    chrome_options["args"].append("--host-resolver-rules=MAP nonexistent.*.test ~NOTFOUND, MAP *.test 127.0.0.1")

    chrome_options["args"].extend(cli_arguments)

    # Copy over any other flags that were passed in via --binary_args
    if kwargs["binary_args"] is not None:
        chrome_options["args"].extend(kwargs["binary_args"])

    # Pass the --headless flag to Chrome if WPT's own --headless flag was set
    if kwargs["headless"] and "--headless" not in chrome_options["args"]:
        chrome_options["args"].append("--headless")

    executor_kwargs["capabilities"] = capabilities

    return executor_kwargs


def env_extras(**kwargs):
    return []


def env_options():
    return {}


class ChromeBrowser(Browser):
    """Chrome is backed by the Chrome Debugger Protocol, which is supplied
    through ``wptrunner.webdriver.ChromeDriverServer``.
    """

    def __init__(self, logger, binary, webdriver_binary="chromedriver",
                 webdriver_args=None):
        """Creates a new representation of Chrome.  The `binary` argument gives
        the browser binary to use for testing."""
        Browser.__init__(self, logger)
        self.binary = binary
        self._expected_alive = False

    def start(self, **kwargs):
        self._expected_alive = True

    def stop(self, force=False):
        self._expected_alive = False

    def pid(self):
        return 0

    def is_alive(self):
        return self._expected_alive

    def cleanup(self):
        self.stop()

    def executor_browser(self):
        return ExecutorBrowser, {"binary": self.binary}

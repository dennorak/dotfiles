// ===============================
// Disable and Block Updates
// ===============================
user_pref("app.normandy.api_url", "");
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.disabledForTesting", true);
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.notifyUser", false);
user_pref("browser.webapps.checkForUpdates", 0);
user_pref("general.useragent.updates.enabled", false);

// ===============================
// New Tab & Home Page Settings
// ===============================
user_pref("browser.newtabpage.enabled", false);  // Disable new tab page
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "null");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "null");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "null");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "null");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "null");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "null");
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "[]");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
user_pref("startup.homepage_welcome_url", "about:blank");  // Clean startup
user_pref("startup.homepage_welcome_url.additional", "");

// ===============================
// Telemetry & Data Reporting
// ===============================
user_pref("datareporting.healthreport.documentServerURI", "http://%(server)s/dummy/healthreport/");
user_pref("datareporting.healthreport.logging.consoleEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.dap_enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");

// ===============================
// Privacy Settings
// ===============================
user_pref("privacy.donottrackheader.enabled", true);  // Send Do Not Track header
user_pref("privacy.trackingprotection.enabled", true);  // Enable Tracking Protection
user_pref("network.dns.disablePrefetch", true);  // Disable DNS prefetching
user_pref("privacy.trackingprotection.enabled", true);  // Enable Tracking Protection (again, unnecessary duplicate)

user_pref("geo.provider.testing", true);  // Geolocation spoofing via testing
user_pref("geo.wifi.scan", false);  // Disable Wi-Fi scanning for location

// ===============================
// Session & Browser Settings
// ===============================
user_pref("browser.sessionstore.resume_from_crash", false);  // Disable session restore after crash
user_pref("browser.shell.checkDefaultBrowser", false);  // Disable default browser check
user_pref("browser.startup.page", 0);  // Open a blank page on startup
user_pref("browser.startup.homepage_override.mstone", "ignore");  // Ignore version check for home page
user_pref("browser.warnOnQuit", false);  // Disable quit confirmation prompt
user_pref("toolkit.startup.max_resumed_crashes", -1);  // Disable crash recovery limit

// ===============================
// Extensions & Add-ons
// ===============================
user_pref("extensions.autoDisableScopes", 0);  // Allow all extensions by default
user_pref("extensions.enabledScopes", 5);  // Allow only locally installed extensions
user_pref("extensions.installDistroAddons", false);  // Prevent installation of default distro addons
user_pref("focusmanager.testmode", true);  // Enable focus manager test mode (usually unnecessary)

// ===============================
// Security Settings
// ===============================
user_pref("security.certerrors.mitm.priming.enabled", false);  // Disable MITM priming (to prevent certain security risks)
user_pref("security.ssl.enable_ocsp_stapling", true);  // Enable OCSP stapling (improves SSL security)
user_pref("network.manage-offline-status", false);  // Disable automatic offline status management
user_pref("marionette.port", 0);  // Disable remote automation port (for security)
user_pref("hangmonitor.timeout", 0);  // Disable hang monitor timeout (prevents Firefox hanging detection)
user_pref("media.gmp-manager.updateEnabled", false);  // Disable GMP plugin updates
user_pref("media.sanity-test.disabled", true);  // Disable media sanity test (to avoid unnecessary tests)

// ===============================
// Miscellaneous Settings
// ===============================
user_pref("browser.dom.window.dump.enabled", true);  // Enable logging (useful for debugging, consider disabling in production)
user_pref("devtools.console.stdout.chrome", true);  // Enable logging to stdout in DevTools (debugging)

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);  // Enable custom user styles (if needed for customization)
user_pref("browser.tabs.allow_transparent_browser", true);  // Allow transparent browser (may be useful for themes)
user_pref("sidebar.revamp", true);  // Enable sidebar revamp (new UI feature)
user_pref("sidebar.verticalTabs", true);  // Enable vertical tabs in the sidebar (user preference)
user_pref("idle.lastDailyNotification", -1);  // Disable idle notifications (prevents distracting prompts)

// ===============================
// Network Settings
// ===============================
user_pref("network.sntp.pools", "%(server)s");  // Placeholder for SNTP pool servers
user_pref("remote.active-protocols", 3);  // Control active remote protocols (remote connections)
user_pref("remote.log.level", "Info");  // Log remote connections at 'Info' level
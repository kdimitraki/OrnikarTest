module.exports = {
  'All 3 insurance tiers are displayed': function (browser) {
    const assuranceAutoPage = browser.page.assuranceAutoPage();

    assuranceAutoPage.open();
    browser.waitForElementVisible('body', 10000);
    browser.closeCookiesIfPresent();

    assuranceAutoPage.waitForPricingTabs();
    assuranceAutoPage.assertPricingTabsText();

    browser.end();
  }
};
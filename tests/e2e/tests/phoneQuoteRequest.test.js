module.exports = {
  'User is redirected to contact form page after requesting a quote by phone': function (browser) {
    const assuranceAutoPage = browser.page.assuranceAutoPage();

    assuranceAutoPage.open();
    browser.closeCookiesIfPresent();
    assuranceAutoPage.clickPhoneQuoteCta();

    browser
      .waitForElementVisible('body', 5000)
      .assert.urlContains('/survey.survicate')
      .end();
  }
};
module.exports = {
   '@tags': ['smoke'],
   
  'User is redirected to subscription page from CTA "Je fais mon devis en ligne"': function (browser) {
    const assuranceAutoPage = browser.page.assuranceAutoPage();

    assuranceAutoPage.open();
    browser.closeCookiesIfPresent();
    assuranceAutoPage.clickSubscriptionCta();

    browser
      .waitForElementVisible('body', 5000)
      .assert.urlContains('/assurance-auto/souscription')
      .end();
  }
};
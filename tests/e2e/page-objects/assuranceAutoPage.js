module.exports = {
  url() {
    return process.env.UI_BASE_URL;
  },

  elements: {
    body: 'body',

    subscriptionCta: {
        selector: '//div[text()="Je fais mon devis en ligne"]/ancestor::a',
        locateStrategy: 'xpath'
    },

    phoneQuoteCta: {
      selector: 'a[cta_name="Je fais mon devis par téléphone"]'
    },

    tiersTab: {
      selector: 'div[js-tabs-link="1"] .label-m'
    },

    intermediateTab: {
      selector: 'div[js-tabs-link="2"] .label-m'
    },

    allRiskTab: {
      selector: 'div[js-tabs-link="3"] .label-m'
    }
 },

  commands: [{
    open() {
      return this.navigate().waitForElementVisible('@body', 10000);
    },

    clickSubscriptionCta() {
      return this.waitForElementVisible('@subscriptionCta', 10000)
        .click('@subscriptionCta');
    },

    clickPhoneQuoteCta() {
      return this.waitForElementVisible('@phoneQuoteCta', 10000)
        .click('@phoneQuoteCta');
    },

    waitForPricingTabs() {
      return this
        .waitForElementVisible('@tiersTab', 10000)
        .waitForElementVisible('@intermediateTab', 10000)
        .waitForElementVisible('@allRiskTab', 10000);
    },

    assertPricingTabsText() {
      return this
        .assert.textEquals('@tiersTab', 'Tiers')
        .assert.textEquals('@intermediateTab', 'Intermédiaire')
        .assert.textEquals('@allRiskTab', 'Tous risques');
    }
  }]
};
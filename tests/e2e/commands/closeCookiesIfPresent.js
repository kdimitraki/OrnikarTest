exports.command = function closeCookiesIfPresent() {
  return this.execute(function () {
    const acceptButton = document.querySelector('#axeptio_btn_acceptAll');
    if (acceptButton) {
      acceptButton.click();
    }

    const continueButton = Array.from(document.querySelectorAll('button'))
      .find((button) => button.textContent.includes('Continuer sans accepter'));

    if (continueButton) {
      continueButton.click();
    }

    const widget = document.querySelector('.axeptio_widget');
    if (widget) {
      widget.style.display = 'none';
    }
  });
};
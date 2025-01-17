/**
 * Create {@link https://maskito.dev/core-concepts/mask-expression pattern mask expression} for phone number
 *
 * @example
 * tuiCreatePhoneMaskExpression('+1', '(###) ###-####');
 */
export function tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode) {
  return [
    ...countryCode.split(''),
    ' ',
    ...phoneMaskAfterCountryCode
      .replaceAll(/[^#\- ()]+/g, '')
      .split('')
      .map((item) => (item === '#' ? /\d/ : item)),
  ];
}

export function detectMobileYaBrowser() {
  const isYaBrowser = /YaBrowser/.test(navigator.userAgent);
  const isMobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

  return isYaBrowser && isMobileBrowser;
}

/**
* Device Assertion
* Asserts the users device
*/

export function assertUserDevice() {
  if (typeof navigator !== `undefined`) {
    if ((navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/iPad/i))) {
      return 'ios';
    } if (navigator.userAgent.match(/Android/i)) {
      return 'android';
    }
  }
  return 'desktop';
}

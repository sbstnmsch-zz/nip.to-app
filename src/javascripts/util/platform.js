export class Platform {

  constructor(_window) {
    this.userAgent = _window.navigator.userAgent.toLowerCase();
    this.hardware = this.getHardware();
    this.os = this.getOS();

    if (this.os === 'android') {
      this.versionAsNumber = this.getAndroidVersion();
    } else
    if (this.os === 'ios') {
      this.versionAsNumber = this.getIosVersion();
    } else {
      this.versionAsNumber = -1;
    }
    this.version = `${this.os}-${this.versionAsNumber}`;

    _window.document.body.classList.add(
      this.hardware,
      this.os,
      this.version
    );
  }

  getHardware() {
    return !this.userAgent.match(/android.+mobile/) &&
      this.userAgent.match(/android|tablet|ipad;/) ? 'tablet' : 'mobile';
  }

  getOS() {
    if (this.userAgent.indexOf('android') > -1) {
      return 'android';
    } else
    if (this.userAgent.match(/ip(hone|ad|od);.* os \d+/)) {
      return 'ios';
    }
    return 'unsupported';
  }

  getAndroidVersion() {
    if (this.userAgent.match(/ android 5\./)) {
      return 5;
    } else
    if (this.userAgent.match(/ android 4\./)) {
      return 4;
    } else
    if (this.userAgent.match(/ android 3\./)) {
      return 3;
    } else
    if (this.userAgent.match(/ android 2\./)) {
      return 2;
    } else
    return -1;
  }

  getIosVersion() {
    if (this.userAgent.match(/ip(hone|ad|od);.* os 6_/)) {
      return 6;
    } else
    if (this.userAgent.match(/ip(hone|ad|od);.* os 7_/)) {
      return 7;
    } else
    if (this.userAgent.match(/ip(hone|ad|od);.* os 8_/)) {
      return 8;
    } else
    if (this.userAgent.match(/ip(hone|ad|od);.* os 9_/)) {
      return 9;
    }
    return -1;
  }

  toString() {
    return `${this.hardware}-${this.os}-${this.versionAsNumber}`;
  }
}

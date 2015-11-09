import test from 'tape';
import {Platform} from './platform';
import WindowMock from 'window-mock';
import {name} from '../../../package.json';

let
  windowMock = new WindowMock(),
  tests = [
    // Tablet or mobile
    {
      message: 'should detect unknown as mobiles',
      ua: ' it`s a miracle ',
      hardware: 'mobile',
      os: 'unsupported',
      version: 'unsupported--1',
      versionAsNumber: -1
    },
    {
      message: 'should detect tablets as tablet',
      ua: ' tablet ',
      hardware: 'tablet',
      os: 'unsupported',
      version: 'unsupported--1',
      versionAsNumber: -1
    },
    {
      message: 'should detect android mobiles as mobile',
      ua: 'Mozilla/5.0 (Linux; Android 4.1.2; GT-I9100 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Mobile Safari/537.36',
      hardware: 'mobile',
      os: 'android',
      version: 'android-4',
      versionAsNumber: 4
    },
    {
      message: 'should detect android tablets as tablet',
      ua: 'Mozilla/5.0 (Linux; U; Android 4.2.2; nl-nl; GT-P5210 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
      hardware: 'tablet',
      os: 'android',
      version: 'android-4',
      versionAsNumber: 4
    },
    {
      message: 'should detect iPhone as mobile',
      ua: '(iphone; ',
      hardware: 'mobile',
      os: 'unsupported',
      version: 'unsupported--1',
      versionAsNumber: -1
    },
    {
      message: 'should detect iPod as mobile',
      ua: '(ipod; ',
      hardware: 'mobile',
      os: 'unsupported',
      version: 'unsupported--1',
      versionAsNumber: -1
    },
    {
      message: 'should detect iPad as tablet',
      ua: '(ipad; ',
      hardware: 'tablet',
      os: 'unsupported',
      version: 'unsupported--1',
      versionAsNumber: -1
    },

    // Operating System
    {
      message: 'should detect Android',
      ua: ' android mobile',
      hardware: 'mobile',
      os: 'android',
      version: 'android--1',
      versionAsNumber: -1
    },
    {
      message: 'should detect IOS on iPhone',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 1_0',
      hardware: 'mobile',
      os: 'ios',
      version: 'ios--1',
      versionAsNumber: -1
    },
    {
      message: 'should detect IOS on iPod',
      ua: 'Mozilla/5.0 (iPod; CPU iPhone OS 1_0',
      hardware: 'mobile',
      os: 'ios',
      version: 'ios--1',
      versionAsNumber: -1
    },
    {
      message: 'should detect IOS on iPad',
      ua: 'Mozilla/5.0 (iPad; CPU OS 1_0',
      hardware: 'tablet',
      os: 'ios',
      version: 'ios--1',
      versionAsNumber: -1
    },

    // OS version
    {
      message: 'should detect Android 5',
      ua: 'Mozilla/5.0 (Linux; U; Android 5.6.7; en-us; Nexus One Build/FRG83) ... Mobile Safari',
      hardware: 'mobile',
      os: 'android',
      version: 'android-5',
      versionAsNumber: 5
    },
    {
      message: 'should detect Android 4',
      ua: 'Mozilla/5.0 (Linux; U; Android 4.5.6; en-us; Nexus One Build/FRG83) ... Mobile Safari',
      hardware: 'mobile',
      os: 'android',
      version: 'android-4',
      versionAsNumber: 4
    },
    {
      message: 'should detect Android 3',
      ua: 'Mozilla/5.0 (Linux; U; Android 3.4.5; en-us; Nexus One Build/FRG83) ... Mobile Safari Mobile Safari',
      hardware: 'mobile',
      os: 'android',
      version: 'android-3',
      versionAsNumber: 3
    },
    {
      message: 'should detect Android 2',
      ua: 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Nexus One Build/FRG83) ... Mobile Safari',
      hardware: 'mobile',
      os: 'android',
      version: 'android-2',
      versionAsNumber: 2
    },
    {
      message: 'should detect IOS 9 on iPhone',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) ...',
      hardware: 'mobile',
      os: 'ios',
      version: 'ios-9',
      versionAsNumber: 9
    },
    {
      message: 'should detect IOS 9 on iPad',
      ua: 'Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) ...',
      hardware: 'tablet',
      os: 'ios',
      version: 'ios-9',
      versionAsNumber: 9
    },
    {
      message: 'should detect IOS 8 on iPhone',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) ...',
      hardware: 'mobile',
      os: 'ios',
      version: 'ios-8',
      versionAsNumber: 8
    },
    {
      message: 'should detect IOS 8 on iPad',
      ua: 'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) ...',
      hardware: 'tablet',
      os: 'ios',
      version: 'ios-8',
      versionAsNumber: 8
    },
    {
      message: 'should detect IOS 7',
      ua: 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) ...',
      hardware: 'tablet',
      os: 'ios',
      version: 'ios-7',
      versionAsNumber: 7
    },
    {
      message: 'should detect IOS 6',
      ua: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) ...',
      hardware: 'tablet',
      os: 'ios',
      version: 'ios-6',
      versionAsNumber: 6
    },
    {
      message: 'should detect IOS 5 as unknown',
      ua: 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) ...',
      hardware: 'tablet',
      os: 'ios',
      version: 'ios--1',
      versionAsNumber: -1
    }
  ];

test(`${name}: util/platform - API`, (t) => {
  let _platform = new Platform(windowMock);

  t.equal(typeof _platform.getHardware, 'function', 'should have a getHardware() method');
  t.equal(typeof _platform.getOS, 'function', 'should have a getOS() method');
  t.equal(typeof _platform.getAndroidVersion, 'function', 'should have a getAndroidVersion() method');
  t.equal(typeof _platform.getIosVersion, 'function', 'should have a getIosVersion() method');
  t.equal(typeof _platform.toString, 'function', 'should have a toString() method');

  t.end();
});

test(`${name}: util/platform - Determine Hardware`, (t) => {
  t.plan(tests.length);

  tests.forEach(test => {
    let _result;
    windowMock.navigator.userAgent = test.ua;
    _result = new Platform(windowMock);
    t.equal(_result.hardware, test.hardware, test.message);
  });
});

test(`${name}: util/platform - Determine Operating System`, (t) => {
  t.plan(tests.length);

  tests.forEach(test => {
    let _result;
    windowMock.navigator.userAgent = test.ua;
    _result = new Platform(windowMock);
    t.equal(_result.os, test.os, test.message);
  });
});

test(`${name}: util/platform - Determine OS version`, (t) => {
  t.plan( tests.length);

  tests.forEach(test => {
    let _result;
    windowMock.navigator.userAgent = test.ua;
    _result = new Platform(windowMock);
    t.equal(_result.version, test.version, test.message);
  });
});

test(`${name}: util/platform - Determine OS version as number`, (t) => {
  t.plan( tests.length);

  tests.forEach(test => {
    let _result;
    windowMock.navigator.userAgent = test.ua;
    _result = new Platform(windowMock);
    t.equal(_result.versionAsNumber, test.versionAsNumber, test.message);
  });
});

test(`${name}: util/platform - Initialization`, (t) => {
  let _result;

  windowMock = new WindowMock();
  windowMock.navigator.userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) ...';
  _result = new Platform(windowMock);

  t.equal(
    windowMock.document.body.classList.toString(),
    'tablet,ios,ios-6',
    'should append classes to body based on device and os'
  );
  t.end();
});

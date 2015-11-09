import test from 'tape';
import {ShareSmsFactory} from './share-sms-factory';
import {name} from '../../../package.json';

let tests = [
  {
    message: 'should use standard SMS-scheme for unknown',
    os: 'unsupported',
    versionAsNumber: -1,

    href: 'sms:?body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  },
  {
    message: 'should use standard SMS-scheme for Android OS',
    os: 'android',
    versionAsNumber: 4,

    href: 'sms:?body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  },
  {
    message: 'should use semicolon SMS-scheme for IOS unknown',
    os: 'ios',
    versionAsNumber: -1,

    href: 'sms:;body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  },
  {
    message: 'should use semicolon SMS-scheme for IOS 5',
    os: 'ios',
    versionAsNumber: 5,

    href: 'sms:;body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  },
  {
    message: 'should use semicolon SMS-scheme for IOS 6',
    os: 'ios',
    versionAsNumber: 6,

    href: 'sms:;body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  },
  {
    message: 'should use semicolon SMS-scheme for IOS 7',
    os: 'ios',
    versionAsNumber: 7,

    href: 'sms:;body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  },
  {
    message: 'should use ampersand SMS-scheme for IOS 8',
    os: 'ios',
    versionAsNumber: 8,

    href: 'sms:&body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  },
  {
    message: 'should use semicolon SMS-scheme for IOS 9',
    os: 'ios',
    versionAsNumber: 9,
    href: 'sms:&body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2'
  }
];

test(`${name}: share/share-sms-factory - Get SMS-links`, (t) => {
    let factory = new ShareSmsFactory();

    t.plan(tests.length);

    tests.forEach(test => {
      let
        opts = {
          platform: {
            os: test.os,
            versionAsNumber: test.versionAsNumber
          },
          coordinates: { latitude: 1, longitude: 2 },
          subject: 'Subject',
          body: 'Body-{{URL}}',
          hashtag: 'Hashtag'
        };

      t.equal(factory.getLink(opts), test.href, test.message);
    });
});

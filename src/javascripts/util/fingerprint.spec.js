import test from 'tape';
import {Fingerprint} from './fingerprint';
import {name} from '../../../package.json';

test(`${name}: util/fingerprint - API`, (t) => {
  t.equal(typeof Fingerprint.toString, 'function', 'should have a toString() method');

  t.end();
});

test(`${name}: util/fingerprint - Generate unique fingerprints`, (t) => {
  t.ok(
    (new Fingerprint().toString()).match(
      // xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx
      /^[0-9a-f]{8,8}-[0-9a-f]{4,4}-4[0-9a-f]{3,3}-[0-9a-f]{4,4}-[0-9a-f]{12,12}$/
    ),
    'should generate a RFC4122 version 4 UUID'
  );

  t.end();
});

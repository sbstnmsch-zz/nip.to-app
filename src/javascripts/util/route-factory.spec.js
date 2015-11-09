import test from 'tape';
import {RouteFactory} from './route-factory';
import {name} from '../../../package.json';
import WindowMock from 'window-mock';

let
  windowMock = new WindowMock(),
  tests = [
    {
      message: 'should get correct values for location hash ``',
      locationHash: '',
      uid: '',
      action: '',
      hash: ''
    },
    {
      message: 'should get correct values for location hash `a`',
      locationHash: 'a',
      uid: 'a',
      action: '',
      hash: 'a'
    },
    {
      message: 'should get correct values for location hash `a/b`',
      locationHash: 'a/b',
      uid: 'a',
      action: 'b',
      hash: 'a/b'
    }
  ];

test(`${name}: util/route-factory - API`, (t) => {
  let factory = new RouteFactory(windowMock);;

  t.equal(typeof factory.hash, 'string', 'should have a hash value');
  t.equal(typeof factory.toString, 'function', 'should have a toString() method');

  t.end();
});

test(`${name}: util/route-factory - Get route uid, action and hash`, (t) => {
  tests.forEach(test => {
    let _result;

    windowMock.location.hash = test.locationHash;
    _result = new RouteFactory(windowMock);

    t.equal(_result.uid, test.uid, test.message);
    t.equal(_result.action, test.action, test.message);
    t.equal(_result.parameters, test.parameters, test.message);
    t.equal(_result.hash, test.hash, test.message);
  });
  t.end();
});

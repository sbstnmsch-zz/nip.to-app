import test from 'tape';
import {PrefixedLocalStorage} from './prefixed-local-storage';
import WindowMock from 'window-mock';
import {name} from '../../../package.json';

test(`${name}: util/prefixed-local-storage - API`, (t) => {
  let
    windowMock = new WindowMock(),
    storage = new PrefixedLocalStorage(windowMock, 'test');

  t.equal(typeof storage.get, 'function', 'should have a get() method');
  t.equal(typeof storage.set, 'function', 'should have a set() method');
  t.equal(typeof storage.clear, 'function', 'should have a clear() method');

  t.end();
});

test(`${name}: util/prefixed-local-storage - Set values`, (t) => {
    let
      windowMock = new WindowMock(),
      storage = new PrefixedLocalStorage(windowMock, 'test');

    storage.set('key', 'value');

    t.equal(
      windowMock.localStorage.getItem('test.key'),
      'value',
      'should set `key` to `value`'
    );

    t.end();
});

test(`${name}: util/prefixed-local-storage - Get values`, (t) => {
    let
      windowMock = new WindowMock(),
      storage = new PrefixedLocalStorage(windowMock, 'test')

    windowMock.localStorage.setItem('test.key', 'value');

    t.equal(
      storage.get('key'),
      'value',
      'should get `key` and return `value`'
    );

    t.end();
});

test(`${name}: util/prefixed-local-storage - Clear values`, (t) => {
    let
      windowMock = new WindowMock(),
      storage = new PrefixedLocalStorage(windowMock, 'test'),
      deletedKeys = [];

    windowMock.localStorage.setItem('test.key1', 'value');
    windowMock.localStorage.setItem('test.key2', 'value');
    windowMock.localStorage.setItem('other.key', 'value');

    windowMock.localStorage = windowMock.localStorage._;

    windowMock.localStorage.removeItem = (key) => {
      deletedKeys.push(key);
    };

    storage.clear();

    t.equal(
      deletedKeys.sort().toString(),
      ['test.key1', 'test.key2'].sort().toString(),
      'should clear all values'
    );

    t.end();
});

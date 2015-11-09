import test from 'tape';
import WindowMock from 'window-mock';
import {ShareController} from './share-controller';
import {name} from '../../../package.json';

let
  windowMock = new WindowMock(),
  factory = new ShareController( { window: windowMock } );

test(`${name}: share/share-controller - API`, (t) => {
  t.equal(typeof factory.share, 'function', 'should have a share() method');
  t.end();
});

test(`${name}: share/share-controller - Sharing`, (t) => {
  // TODO
  t.end();
});

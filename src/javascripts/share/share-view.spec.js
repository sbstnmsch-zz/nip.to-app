import test from 'tape';
import {ShareView} from './share-view';
import WindowMock from 'window-mock';
import {name} from '../../../package.json';

let
  windowMock = new WindowMock(),
  view = new ShareView( { window: windowMock } );


test(`${name}: share/share-view - Share buttons`, (t) => {
  let nodes;

  view.init();
  nodes = view.view.children[0].children;

  t.equal(nodes.length, 5, 'should have 5 buttons');
  t.equal(nodes[0].id, 'sms', 'should have a sms button');
  t.equal(nodes[1].id, 'whatsapp', 'should have a whatsapp button');
  t.equal(nodes[2].id, 'email', 'should have a email button');
  t.equal(nodes[3].id, 'facebook', 'should have a facebook button');
  t.equal(nodes[4].id, 'twitter', 'should have a twitter button');

  t.end();
});

import test from 'tape';
import {ShareFactory} from './share-factory';
import {name} from '../../../package.json';

let
  factory = new ShareFactory();

test(`${name}: share/share-factory - API`, (t) => {

  t.equal(typeof factory.getLink, 'function', 'should have a getLink() method');
  t.equal(typeof factory.getUrl, 'function', 'should have a getUrl() method');

  t.end();
});

test(`${name}: share/share-factory - Url generation`, (t) => {
  let
    opts = {
      platform: {},
      coordinates: { latitude: 1, longitude: 2 },
      subject: 'Subject',
      body: 'Body-{{URL}}',
      hashtag: 'Hashtag'
    };

  t.equal(
    factory.getUrl(opts.coordinates),
    'http://nip.to/#/1,2',
    'should generate a URL with coordinates'
  );

  t.end();
});

import test from 'tape';
import {ShareTwitterFactory} from './share-twitter-factory';
import {name} from '../../../package.json';

test(`${name}: share/share-twitter-factory - Get Twitter-links`, (t) => {
  let
    factory = new ShareTwitterFactory(),
    opts = {
      platform: {},
      coordinates: { latitude: 1, longitude: 2 },
      subject: 'Subject',
      body: 'Body\n-{{URL}}',
      hashtag: 'Hashtag'
    };

  t.equal(
    factory.getLink(opts),
    'http://twitter.com/share?text=Body%20-&url=http%3A%2F%2Fnip.to%2F%23%2F1%2C2&hashtags=hashtag',
    'should generate a twitter link'
  );

  t.end();
});

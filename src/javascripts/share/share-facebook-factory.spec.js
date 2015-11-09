import test from 'tape';
import {ShareFacebookFactory} from './share-facebook-factory';
import {name} from '../../../package.json';

test(`${name}: share/share-facebook-factory - Get Facebook-links`, (t) => {
  let
    factory = new ShareFacebookFactory(),
    opts = {
      platform: {},
      coordinates: { latitude: 1, longitude: 2 },
      subject: 'Subject',
      body: 'Body-{{URL}}',
      hashtag: 'Hashtag'
    };

  t.equal(
    factory.getLink(opts),
    'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fnip.to%2F%23%2F1%2C2',
    'should generate a facebook link'
  );

  t.end();
});

import test from 'tape';
import {ShareEmailFactory} from './share-email-factory';
import {name} from '../../../package.json';

test(`${name}: share/share-email-factory - Get Email-links`, (t) => {
  let
    factory = new ShareEmailFactory(),
    opts = {
      platform: {},
      coordinates: { latitude: 1, longitude: 2 },
      subject: 'Subject',
      body: 'Body-{{URL}}',
      hashtag: 'Hashtag'
    };

  t.equal(
    factory.getLink(opts),
    'mailto:?subject=Subject&body=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2',
    'should generate a email link'
  );

  t.end();
});

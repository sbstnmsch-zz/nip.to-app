import test from 'tape';
import {ShareWhatsappFactory} from './share-whatsapp-factory';
import {name} from '../../../package.json';

test(`${name}: share/share-whatsapp-factory - Get Whatsapp-links`, (t) => {
  let
    factory = new ShareWhatsappFactory(),
    opts = {
      platform: {},
      coordinates: { latitude: 1, longitude: 2 },
      subject: 'Subject',
      body: 'Body-{{URL}}',
      hashtag: 'Hashtag'
    };

  t.equal(
    factory.getLink(opts),
    'whatsapp://send?text=Body-http%3A%2F%2Fnip.to%2F%23%2F1%2C2',
    'should generate a whatsapp link'
  );

  t.end();
});

import {ShareFactory} from './share-factory';

export class ShareWhatsappFactory extends ShareFactory {

  /*
    Send WhatsApp:
    http://stackoverflow.com/questions/21935149/sharing-link-on-whatsapp-from-mobile-website-not-application-for-android
  */

  getLink(opts) {
    let url = this.getUrl(opts.coordinates);

    opts.body = encodeURIComponent(opts.body.replace('{{URL}}', url));

    return `whatsapp://send?text=${opts.body}`;
  }
}

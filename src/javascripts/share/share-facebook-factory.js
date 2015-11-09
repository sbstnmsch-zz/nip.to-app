import {ShareFactory} from './share-factory';

export class ShareFacebookFactory extends ShareFactory {

  getLink(opts) {
    let url = this.getUrl(opts.coordinates);

    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  }
}

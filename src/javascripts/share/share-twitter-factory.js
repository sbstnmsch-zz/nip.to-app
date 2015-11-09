import {ShareFactory} from './share-factory';

export class ShareTwitterFactory extends ShareFactory {

  getLink(opts) {
    let url = this.getUrl(opts.coordinates);

    opts.body = encodeURIComponent(opts.body.replace('\n', ' ').replace('{{URL}}', '').trim());

    return `http://twitter.com/share?text=${opts.body}&url=${encodeURIComponent(url)}&hashtags=${opts.hashtag.toLowerCase()}`;
  }
}

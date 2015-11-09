import {ShareFactory} from './share-factory';

export class ShareEmailFactory extends ShareFactory {

  getLink(opts) {
    let url = this.getUrl(opts.coordinates);

    opts.subject = encodeURIComponent(opts.subject);
    opts.body = encodeURIComponent(opts.body.replace('{{URL}}', url));

    return `mailto:?subject=${opts.subject}&body=${opts.body}`;
  }
}

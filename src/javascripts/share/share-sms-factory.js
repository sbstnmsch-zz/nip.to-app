import {ShareFactory} from './share-factory';

export class ShareSmsFactory extends ShareFactory {

  /*
    Sending SMS on different devices and OS-versions requires different
    URL-schemes as of:
    http://blog.julianklotz.de/2015/03/14/the-sms-uri-scheme/
  */

  getLink(opts) {
    let url = this.getUrl(opts.coordinates);

    opts.body = encodeURIComponent(opts.body.replace('{{URL}}', url));

    if (opts.platform.os === 'ios') {
      if (opts.platform.versionAsNumber < 8) {
        return `sms:;body=${opts.body}`;
      } else {
        return `sms:&body=${opts.body}`;
      }
    }
    // Else try standard Android link scheme
    return `sms:?body=${opts.body}`;
  }
}

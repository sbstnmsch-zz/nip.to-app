import {ShareView} from './share-view';
import {WebAppController} from '../util/web-app-controller';
import {ShareLocationController} from './location/share-location-controller';
import {ShareSmsFactory} from './share-sms-factory';
import {ShareWhatsappFactory} from './share-whatsapp-factory';
import {ShareEmailFactory} from './share-email-factory';
import {ShareFacebookFactory} from './share-facebook-factory';
import {ShareTwitterFactory} from './share-twitter-factory';

export class ShareController extends WebAppController {

  constructor(app) {
    super(app);
    this.view = new ShareView(app, this);
  }

  run() {
  };

  share(target, _this) {
    let
      shareFactory = {
        sms: ShareSmsFactory,
        whatsapp: ShareWhatsappFactory,
        email: ShareEmailFactory,
        facebook: ShareFacebookFactory,
        twitter: ShareTwitterFactory
      }[target],
      controller = new ShareLocationController(_this.app);

    _this.app.start(controller, _this.app);

    controller.getLocation()
      .then((location) => {
        let
          opts = {
            platform: _this.app.platform,
            coordinates: location.coords,
            subject: 'nip to me!',
            body: 'Hey!\nnip to me at {{URL}}',
            hashtag: 'nip_to_me'
          };

        _this.app.window.location.href = (new shareFactory()).getLink(opts);

        // After that re-init app
        _this.app.window.setTimeout(() => { // TODO refactor this to app.queue();
          _this.app.window.location.reload(); // TODO refactor to app.reload();
        }, 5000);
      },
      () => {
        // TODO handle error case
        console.warn('Could not get position');
      }
    );
  }
}

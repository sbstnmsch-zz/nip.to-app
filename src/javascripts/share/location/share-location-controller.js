import {ShareLocationView} from './share-location-view';
import {WebAppController} from '../../util/web-app-controller';

export class ShareLocationController extends WebAppController {

  constructor(app) {
    super(app);
    this.view = new ShareLocationView(app, this);
  }

  run() {
  };

  getLocation() {
    let
      options = {
        maximumAge: 60000,
        timeout: 8000,
        enableHighAccuracy: true
      };
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        resolve,
        reject,
        options
      );
    });
  }
}

import {CompassView} from './compass-view';
import {WebAppController} from '../util/web-app-controller';

export class CompassController extends WebAppController {

  constructor(app) {
    super(app);
    this.view = new CompassView(app);
    this.lastHeading = 0;
    this.needleHeadingBase = 360 * 100 + 270; /* trick for smooth rotation */
  }

  run() {
    if (window.DeviceOrientationEvent) {
      let _this = this;
      window.addEventListener('deviceorientation', function(event) {
        CompassController.onHeading(event, _this);
      });
    }
  }

  static onHeading(event, _this) {
    let
      compassHeading;

    if (event.webkitCompassHeading) {
      compassHeading = event.webkitCompassHeading;
    } else if (event.alpha) {
      compassHeading = event.alpha;
    } else {
      compassHeading = 0;
    }

    if (compassHeading > 270 && _this.lastHeading < 90) {
      // left
      _this.needleHeadingBase -= 360;
    } else
    if (compassHeading < 90 && _this.lastHeading > 270) {
      // right
      _this.needleHeadingBase += 360;
    }

    _this.lastHeading = compassHeading;

    _this.view.heading = _this.needleHeadingBase + compassHeading;
    _this.view.headingDegrees = compassHeading;
  }

  // destroy(app) {
  //   super.destroy(app);
  //   if (window.DeviceOrientationEvent) {
  //     window.removeEventListener('deviceorientation', this.onHeading);
  //   }
  // }
}

import {WebAppView} from '../util/web-app-view';

export class CompassView extends WebAppView {

  init() {
    this.degrees = this.createElement('div');
    this.degrees.className = 'nipto-compass-heading';

    this.needle = this.createElement('div');
    this.needle.className = 'nipto-compass-needle u-icon-needle';

    this
      .add(this.needle)
      .add(this.degrees)
      .show()
      .addClass('nipto-compass')
      .addAnimationClass('u-explode');
    return this;
  }

  set heading(value) {
    this.needle.style['-webkit-transform'] = `rotate(-${value | 0}deg)`;
  }

  set headingDegrees(value) {
    this.degrees.innerText = value | 0;
  }

  destroy() {
    this
      .removeClass('u-explode')
      .removeClass('nipto-compass');
    return this;
  }
}

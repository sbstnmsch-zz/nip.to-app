import {WebAppView} from '../../util/web-app-view';

export class ShareLocationView extends WebAppView {

  init() {
    let
      spinner = this.createElement('div');

    spinner.className = 'nipto-spinner';

    this
      .add(spinner)
      .show()
      .addClass('nipto-share-location')
      .addClass('u-icon-share')
      .addAnimationClass('u-explode');

    return this;
  }

  destroy() {
    this
      .removeClass('u-explode')
      .removeClass('u-icon-share')
      .removeClass('nipto-share-location');

    return this;
  }

}

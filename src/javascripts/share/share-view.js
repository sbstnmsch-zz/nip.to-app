import {WebAppView} from '../util/web-app-view';

export class ShareView extends WebAppView {

  init(_controller) {
    let
      sms = this.createElement('a'),
      whatsapp = this.createElement('a'),
      email = this.createElement('a'),
      facebook = this.createElement('a'),
      twitter = this.createElement('a');

    sms.id = 'sms';
    sms.className = 'nipto-share--sms';
    whatsapp.id = 'whatsapp';
    whatsapp.className = 'nipto-share--whatsapp';
    email.id = 'email';
    email.className = 'nipto-share--email';
    facebook.id = 'facebook';
    facebook.className = 'nipto-share--facebook';
    twitter.id = 'twitter';
    twitter.className = 'nipto-share--twitter';

    [sms, whatsapp, email, facebook, twitter].forEach( thirdParty => {
      let
        shareFunction = function(e) {
          e.preventDefault();
          _controller.share(thirdParty.id, _controller);
          _controller.app.api.touch(`share-${thirdParty.id}`);
        };
      thirdParty.ontouchstart = shareFunction;
      thirdParty.onclick = shareFunction;
    });

    this
      .add(sms)
      .add(whatsapp)
      .add(email)
      .add(facebook)
      .add(twitter)
      .show()
      .addClass('nipto-share')
      .addAnimationClass('u-explode');

    return this;
  }

  destroy() {
    this
      .removeClass('u-explode')
      .removeClass('nipto-share');

    return this;
  }

}

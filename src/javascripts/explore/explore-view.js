import {WebAppView} from '../util/web-app-view';

export class ExploreView extends WebAppView {

  init() {
    let
      food = this.createElement('a'),
      culture = this.createElement('a'),
      party = this.createElement('a');

    food.className = 'nipto-explore--food';
    culture.className = 'nipto-explore--culture';
    party.className = 'nipto-explore--party';

    this
      .add(food)
      .add(culture)
      .add(party)
      .show()
      .addClass('nipto-explore')
      .addAnimationClass('u-explode');

    return this;
  }

  destroy() {
    this
      .removeClass('u-explode')
      .removeClass('nipto-explore');
    return this;
  }

}

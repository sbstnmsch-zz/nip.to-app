import {ExploreView} from './explore-view';
import {WebAppController} from '../util/web-app-controller';

export class ExploreController extends WebAppController {

  constructor(app) {
    super(app);
    this.view = new ExploreView(app);
  }

  run() {
  }

}

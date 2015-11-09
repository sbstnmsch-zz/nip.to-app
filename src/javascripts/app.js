import {WebApp} from 'util/web-app';
import {CompassController} from 'compass/compass-controller';
import {ShareController} from 'share/share-controller';
import {ExploreController} from 'explore/explore-controller';

(() => {

  new WebApp(window, 'nipto')
    .register('compass', CompassController)
    .register('share', ShareController)
    .register('explore', ExploreController)
    .bind('.nipto-navigation-item a')
    .load('assets/stylesheets/nip.to-app.min.css')
    .then((app) => {
      // Rempy Sharp's staus bar hiding trick
      window.scrollTo(0, 1);
      window.document.body.classList.add('u-onload');
      // Start app
      app.run();
    });

})();

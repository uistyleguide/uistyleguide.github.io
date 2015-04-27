(function() {
'use strict';

/**
 * Initialization function that validates environment
 * requirements.
 */
angular
  .module('material.core', [ 'material.core.theming' ])
  .config( MdCoreConfigure );


function MdCoreConfigure($provide, $mdThemingProvider) {

  $provide.decorator('$$rAF', ["$delegate", rAFDecorator]);

  $mdThemingProvider.theme('default')
    .primaryPalette('ad-424242', {
      'default': '500', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '600', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': 'A700', // use shade 100 for the <code>md-hue-1</code> class
      'hue-3': '50' // use shade 100 for the <code>md-hue-1</code> class
    })
    .accentPalette('ad-660099', {
      'default': '300' // by default use shade 400 from the pink palette for primary intentions
    })
    .warnPalette('ad-EF1D2D')
    .backgroundPalette('grey');
}


function rAFDecorator( $delegate ) {
  /**
   * Use this to throttle events that come in often.
   * The throttled function will always use the *last* invocation before the
   * coming frame.
   *
   * For example, window resize events that fire many times a second:
   * If we set to use an raf-throttled callback on window resize, then
   * our callback will only be fired once per frame, with the last resize
   * event that happened before that frame.
   *
   * @param {function} callback function to debounce
   */
  $delegate.throttle = function(cb) {
    var queueArgs, alreadyQueued, queueCb, context;
    return function debounced() {
      queueArgs = arguments;
      context = this;
      queueCb = cb;
      if (!alreadyQueued) {
        alreadyQueued = true;
        $delegate(function() {
          queueCb.apply(context, queueArgs);
          alreadyQueued = false;
        });
      }
    };
  };
  return $delegate;
}

})();

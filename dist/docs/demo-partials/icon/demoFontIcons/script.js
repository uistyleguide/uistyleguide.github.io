
angular
  .module('appDemoFontIcons', ['ngMaterial'])
  .controller('DemoCtrl', function( $scope ) {
      // Create list of font-icon names with color overrides
      var iconData = [
            {name: 'icon-home'        , color: "#000000", theme:"md-primary md-hue-0" },
            {name: 'icon-user-plus'   , color: "#000000", theme:"md-primary md-hue-1"},
            {name: 'icon-google-plus2', color: "#000000", theme:"md-primary md-hue-2"},
            {name: 'icon-youtube4'    , color:"#000000", theme:"md-primary md-hue-9"},
             // Use theming to color the font-icon
            {name: 'icon-settings'    , color:"#000000", theme:"md-primary md-hue-5"}
          ];

      // Create a set of sizes...
      $scope.sizes = [
        {size:12,padding:0},
        {size:21,padding:2},
        {size:36,padding:6},
        {size:48,padding:10}
      ];

      $scope.fonts = [].concat(iconData);



  })
  .config(function($mdThemingProvider){
    // Update the theme colors to use themes on font-icons
    $mdThemingProvider.theme('default')
          .primaryPalette("red")
          .accentPalette('green')
          .warnPalette('blue');
  });

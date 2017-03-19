var elixir = require('laravel-elixir');
var BrowserSync = require('laravel-elixir-browsersync');

elixir(function(mix) {
    BrowserSync.init();
    mix.BrowserSync();
});


elixir(function(mix) {

    // Sass
    var options = {
        includePaths: [
            'node_modules/foundation-sites/scss',
            'node_modules/motion-ui/src'
        ]
    };

    mix.sass('app.scss', null, options);

    // Javascript
    var jQuery = '../../../node_modules/jquery/dist/jquery.js';
    var foundationJsFolder = '../../../node_modules/foundation-sites/js/';

    mix.babel([
        jQuery,
        foundationJsFolder + 'foundation.core.js',
        // Include any needed components here. The following are just examples.
        foundationJsFolder + 'foundation.util.mediaquery.js',
        foundationJsFolder + 'foundation.util.keyboard.js',
        foundationJsFolder + 'foundation.util.timerAndImageLoader.js',
        foundationJsFolder + 'foundation.tabs.js',
        // This file initializes foundation
        'start_foundation.js'
    ]);

});
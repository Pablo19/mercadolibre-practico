module.exports = {
  bundle: {
    main: {
      scripts: [
        './app/src/js/*.js',
        //'!./app/libs/mobile/*.min.js'
      ],
      styles: [
        './app/src/css/scss/*.css',
        //'!./app/assets/*.min.css'
      ]
    }
  }
};

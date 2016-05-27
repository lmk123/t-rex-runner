document.body.insertAdjacentHTML( 'beforeend', require( './resources.html' ) );
require( './style.css' );

const Runner = require( './runner' );

module.exports = function ( element, config ) {
  var _element = typeof element === 'string' ? document.querySelector( element ) : element;
  _element.classList.add( 'interstitial-wrapper' );
  return new Runner( _element, config );
};

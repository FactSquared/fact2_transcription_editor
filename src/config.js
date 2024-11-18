/**
 * Some config shared across the app
 */
'use strict';

module.exports = {
  	serverUrl: process.env.SERVER_URL,
  	// TODO: Key only needed for Fact2 integration, for other use cases it depends on your authentication system 
  	key: process.env.ACCESS_KEY
};




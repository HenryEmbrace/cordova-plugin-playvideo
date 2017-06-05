
/**
 * Created by Embrace on 2017/6/2.
 */
var argscheck = require('cordova/argscheck'),
utils = require('cordova/utils'),
exec = require('cordova/exec');

var PLUGIN_NAME = "PlayVideo";

var PlayVideo = function() {};

function isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
};

var aStr = 'http://boyueimages.shhwec.com/cycle/20170529/20170529-140511201-23.mp4';

PlayVideo.playVideoMethod = function(onSuccess, onError) {
    exec(onSuccess, onError, PLUGIN_NAME, "playVideoMethod", [aStr]);
};

module.exports = PlayVideo;


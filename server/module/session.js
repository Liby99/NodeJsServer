/**
 * 
 */

var sessions = require("client-sessions");
var config = require("./../data/config.json");

exports.set = function (server) {
    server.use(sessions({
        cookieName: config["cookie_name"],
        secret: config["cookie_secret"],
        duration: config["cookie_duration"],
        activeDuration: config["cookie_active_duration"]
    }));
}
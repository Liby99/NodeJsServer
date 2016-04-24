/**
 * 
 */

/**
 * Load the config file
 */
var config = require("./data/config.json");
var express = require("express");

/**
 * Update the date time module
 */
function setDateTime() {
    require("./module/datetime.js")();
}

/**
 * Set the routing
 */
function setRouting(server) {
    setDefaultPage(server);
    setStaticField(server);
}

/**
 * Set the default page
 */
function setDefaultPage(server) {
    server.get("/", function (req, res) {
        res.redirect("/" + config["public_default_page"]);
    });
}

/**
 * Use the given static field
 */
function setStaticField(server) {
    server.use("/", express.static(require("path").resolve(config["public_path"])));
}

/**
 * Set the session
 */
function setSession(server) {
    require("./module/session.js").set(server);
}

/**
 * Set the upload system
 */
function setUpload(server) {
    require("./module/upload.js").set(server);
}

/**
 * Set the ajax processing module
 */
function setAjax(server) {
    require("./module/ajax.js").set(server);
}

/**
 * Start the server
 */
(function () {
    
    //Create an express server
    var server = express();
    
    //Initialize the modules of the server
    setDateTime();
    setRouting(server);
    setSession(server);
    setUpload(server);
    setAjax(server);
    
    //Let server listen to given port
    server.listen(config["public_port"], function () {
        console.log(config["app_name"] + " NodeJs server now listening to port " + config["public_port"]);
    });
})();
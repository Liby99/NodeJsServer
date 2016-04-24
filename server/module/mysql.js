/**
 * 
 */

var mysql = require("mysql");
var config = require("./../data/config.json");

/**
 * Mysql Module
 */
module.exports = {
    connection: null,
    connect: function () {
        
        //Create connection
        this.connection = mysql.createConnection({
            host: config["mysql_host"],
            user: config["mysql_user"],
            password: config["mysql_password"],
            database: config["mysql_database"]
        });
        
        //Connect and update status
        this.connection.connect();
    },
    end: function () {
        
        //Disconnect and update status
        this.connection.end();
        this.connection = null;
    },
    query: function (queryStr, data, callback, endAfterCall) {
        
        //Check if the connection needs to be ended
        if (endAfterCall === undefined) {
            endAfterCall = true;
        }
        
        //Make sure the connection is constructed
        if (!this.connection) {
            this.connect();
        }
        
        //Start query
        this.connection.query(queryStr, data, function (err, result) {
            
            //Log error if exists
            if (err) {
                console.log(err);
            }
            
            //Callback
            callback(err, result);
        });
        
        //End connection if required
        if (endAfterCall) {
            this.end();
        }
    }
}
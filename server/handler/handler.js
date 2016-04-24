/**
 * 
 */

var mysql = require("../module/mysql.js");
var TimeSpan = require("../module/timespan.js");

module.exports = {
    hello_world: function (context) {
        context.response.success({
            string: "Hello, World!"
        });
    },
    get_time_span: function (context) {
        var prev = Date.parseDate(context.request.body["date"]);
        var now = new Date();
        var ts = now.getTimeSpan(prev);
        context.response.success({
            time_span: ts.span,
        });
    },
    set_session: function (context) {
        context.request.session.sdfsdfsdf = true;
        context.response.success({
            str: "success"
        });
    },
    reset_session: function (context) {
        context.request.session.reset();
        context.response.success({
            str: "session reset"
        });
    },
    get_session: function (context) {
        if (context.request.session.sdfsdfsdf == true) {
            context.response.success({
                str: "session exists"
            });
        }
        else {
            context.response.error(1, "session expires");
        }
    },
    file_upload: function (context) {
        console.log(context.request.files);
        context.response.success({
            string: "asdfasdf0"
        });
    }
}
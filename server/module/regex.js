/**
 * 
 */

module.exports = {
    isEmail: function () {
        return str.match(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/);
    },
    isName: function () {
        return str.match(/^[a-zA-Z ]+$/);
    }
}
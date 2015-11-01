app.service('utils', function () {

    this.generateKey = function (table) {
        return table + '-' + Math.floor(Date.now() / 1000);
    }
});
app.service('localStorageService', function () {
    var hashPassword = 'onlyNonCustomisableHashForNow';

    // Core localStorage Access ------------------------------------------------

    //encrypted storage
    this.pushDataInVault = function (key, data) {
        window.localStorage.setItem(key, JSON.stringify(sjcl.encrypt(hashPassword, JSON.stringify(data))));
    }

    this.getDataFromVault = function (key) {
        var result = null;
        try {
            if (window.localStorage.getItem(key) != null) {
                result = JSON.parse(sjcl.decrypt(hashPassword, JSON.parse(window.localStorage.getItem(key))));
            }
        }
        catch (e) {
        }

        return result;
    }

    //clear storage
    this.pushUncryptedDataInVault = function (key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    this.getUncryptedDataFromVault = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    // Key analyzer ----------------------------------------------

    getKeyFromIdParam = function (idField) {
        var idStringForKey = '';
        if (Object.prototype.toString.call(idField) === '[object Array]') {
            for (id in idField) {
                if (id != '0') {
                    idStringForKey += '.';
                }
                idStringForKey += idField[id];
            }
        }
        else {
            idStringForKey = idField;
        }

        return idStringForKey;
    }

    // Data handlers -------------------------------------------
    this.getTableEntries = function (table) {
        var query = (table + '\.*');
        var i, results = [];
        for (i in window.localStorage) {
            if (window.localStorage.hasOwnProperty(i)) {
                if (i.match(query)) {
                    value = this.getDataFromVault(i);
                    results.push(value);
                }
            }
        }
        return results;
    }

    this.deleteTableEntries = function (table) {
        var query = (table + '\.*');
        var i, results = [];
        for (i in window.localStorage) {
            if (window.localStorage.hasOwnProperty(i)) {
                if (i.match(query) || (!query && typeof i === 'string')) {
                    window.localStorage.removeItem(i);
                }
            }
        }
        return results;
    }

    this.getTableElement = function (table, id) {
        if (undefined != table && undefined != id) {
            return this.getDataFromVault(table + '.' + getKeyFromIdParam(id));
        }
        return null;
    }

    this.createOrReplaceTableElement = function (table, id, data) {
        if (undefined != table && undefined != id && undefined != data) {
            this.pushDataInVault(table + '.' + getKeyFromIdParam(id), data);
        }
    }

    this.deleteTableElement = function (table, id) {
        if (undefined != table && undefined != id) {
            window.localStorage.removeItem(table + '.' + getKeyFromIdParam(id));
        }
    }

});
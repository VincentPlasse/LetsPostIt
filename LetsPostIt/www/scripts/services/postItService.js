app.service('postItService', function (localStorageService, utils) {

    var tableName = 'postit';
    
    this.getAllPostIts = function () {
        return localStorageService.getTableEntries(tableName);
    };

    this.getPostIt = function (id) {
        return localStorageService.getTableElement(tableName, id);
    }

    this.savePostIt = function (postIt) {
        localStorageService.createOrReplaceTableElement(tableName, postIt.id, postIt);
    }

    this.deletePostIt = function (id) {
        localStorageService.deleteTableElement(tableName, id);
    }

    this.getPostItTemplate = function () {
        var postIt = {
            id: '',
            text: '',
            creationDate: '',
        };

        return postIt;
    }

    this.getNewId = function () {
        return utils.generateKey(tableName);
    }


    /**********************For Dev purposes ****************************/
    this.getStaticPostItList = function () {
        return [
            {
                id: '123456789',
                text: 'Maybe I love you so much I love you no matter who you are pretending to be. You don\'t know how to do any of those. I\'ve got to find a way to escape the horrible ravages of youth. Suddenly, I\'m going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now I have to pay them! It doesn\'t look so shiny to me. Then throw her in the laundry room, which will hereafter be referred to as "the brig". Would you censor the Venus de Venus just because you can see her spewers? With gusto.',
                creationDate: Date.now(),
            }, {
                id: '123456789',
                text: 'Maybe I love you so much I love you no matter who you are pretending to be. You don\'t know how to do any of those. I\'ve got to find a way to escape the horrible ravages of youth. Suddenly, I\'m going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now I have to pay them! It doesn\'t look so shiny to me. Then throw her in the laundry room, which will hereafter be referred to as "the brig". Would you censor the Venus de Venus just because you can see her spewers? With gusto.',
                creationDate: Date.now(),
            }, {
                id: '123456789',
                text: 'Maybe I love you so much I love you no matter who you are pretending to be. You don\'t know how to do any of those. I\'ve got to find a way to escape the horrible ravages of youth. Suddenly, I\'m going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now I have to pay them! It doesn\'t look so shiny to me. Then throw her in the laundry room, which will hereafter be referred to as "the brig". Would you censor the Venus de Venus just because you can see her spewers? With gusto.',
                creationDate: Date.now(),
            }, {
                id: '123456789',
                text: 'Maybe I love you so much I love you no matter who you are pretending to be. You don\'t know how to do any of those. I\'ve got to find a way to escape the horrible ravages of youth. Suddenly, I\'m going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now I have to pay them! It doesn\'t look so shiny to me. Then throw her in the laundry room, which will hereafter be referred to as "the brig". Would you censor the Venus de Venus just because you can see her spewers? With gusto.',
                creationDate: Date.now(),
            },
        ];
    };

});
appHome.service("myhomeService", function ($http) {

    this.gethomeCategories = function () {
        return $http.get("/Home/IndexCat");
    }

    this.getDatas = function () {
        return $http.get("/Home/IndexProduct");
    }

});
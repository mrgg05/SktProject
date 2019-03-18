appHome.controller("myhomeCtrl", function ($scope, myhomeService) {

    $scope.gethomeCat = function () {

        var datacategory = myhomeService.gethomeCategories();

        datacategory.then(function (homedata) {
            console.log(homedata)
            $scope.homecategories = homedata.data;
        }, function () {
            alert("veriler getirilemedi")
        })

    }


    $scope.getAllData = function () {

        var getData = myhomeService.getDatas();
        console.log(getData)
        getData.then(function (product) {
            $scope.alldata = product.data;
        }, function () {
            alert("veriler getirilemedi")
        })
    }

        $scope.date = function (veri) {
        console.log(veri)
        var completedDate = new Date(parseInt(veri.replace("/Date(", "").replace(")/")));
        var dd = completedDate.getDate();
        var mm = completedDate.getMonth() + 1; //January is 0! 
        var yyyy = completedDate.getFullYear();
        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }
        var datee = dd + "." + mm + "." + yyyy;
        console.log(datee)
        $scope.sonuc = datee;

    }

});
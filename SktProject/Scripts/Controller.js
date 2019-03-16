//Product controller
app.controller("myProductCtrl", function ($scope, myProductService) {



    $scope.getAllProducts = function () {

        var getData = myProductService.getProducts();
        
        getData.then(function (product) {
            console.log(product)
            $scope.product = product.data;
            console.log(  new Date(parseInt(product.SKT.substr(6))))
        }, function () {
            alert("veriler getirilemedi")
            })

        
    }
    $scope.date = function (veri) {

        //var date = skt;
        //var nowDate = new Date(parseInt(date.substr(6)));
        //var result = "";
        //result = nowDate.format("dd/mm/yyyy") + " : dd/mm/yyyy";
        console.log(veri)
        var completedDate = new Date(parseInt(veri.replace("/Date(", "").replace(")/")));
        var dd = completedDate.getDate();
        var mm = completedDate.getMonth() + 1; //January is 0! 
        var yyyy = completedDate.getFullYear();
        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }
        //var date = new Date(parseInt(skt.substr(6)));
        var datee = dd + "." + mm + "." + yyyy;
        console.log(datee)
        $scope.sonuc = datee;
        
    }
})

//Category controller

app.controller("myCatCtrl", function ($scope, myCatService) {

    $scope.addCat = false;

    $scope.getAllCategories = function () {

        var getData = myCatService.getCategories();
        console.log(getData)
        getData.then(function (category) {
            $scope.category = category.data;
        }, function () {
            alert("veriler getirilemedi")
        })
    }

    $scope.addCategory = function () {
        var Category = {
           
            CategoryName: $scope.categoryName,
            Description: $scope.catDescription
        };

        var getData = myCatService.AddCategory(Category).then(function (msg) {
         
            alert("Category Added");
        });
        $scope.addCat = false;
        location.reload();
    }

    $scope.Divac = function () {

        $scope.addCat = true;
    }

    $scope.deleteCat = function (x) {

        var getdata = myCatService.DeleteCat(x).then(function (msg) {
            console.log(category)
            alert("Deleted");
        });
        location.reload();

    }

})



//user controller

appUser.controller("myHomeCtrl", function ($scope, myHomeService) {

    $scope.getAllData = function () {

        var getData = myHomeService.getDatas();
        console.log(getData)
        getData.then(function (product) {
            $scope.alldata = product.data;
        }, function () {
            alert("veriler getirilemedi")
        })
    }

    $scope.getAllCat = function () {
        var getData = myHomeService.getDataCat();

        getData.then(function (category) {
            $scope.allcat = category.data;
        }, function () {
            alert("veriler getirilemedi")
        })
    }

     $scope.date = function (veri) {

        //var date = skt;
        //var nowDate = new Date(parseInt(date.substr(6)));
        //var result = "";
        //result = nowDate.format("dd/mm/yyyy") + " : dd/mm/yyyy";
        console.log(veri)
        var completedDate = new Date(parseInt(veri.replace("/Date(", "").replace(")/")));
        var dd = completedDate.getDate();
        var mm = completedDate.getMonth() + 1; //January is 0! 
        var yyyy = completedDate.getFullYear();
        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }
        //var date = new Date(parseInt(skt.substr(6)));
        var datee = dd + "." + mm + "." + yyyy;
        console.log(datee)
        $scope.sonuc = datee;
        
    }

})
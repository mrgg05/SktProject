app.controller("myCatCtrl", function ($scope, myCatService) {

    $scope.addCat = false;

    $scope.getAllCategories = function () {

        var getData = myCatService.getCategories();

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

})


//Product controller

app.controller("myProductCtrl", function ($scope, myProductService) {

    $scope.addProduct = false;

    $scope.getAllProducts = function () {

        var getData = myProductService.getProducts();

        getData.then(function (product) {
            $scope.product = product.data;
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
        $scope.addProduct = false;
        location.reload();
    }


    $scope.uploadedFile = function (element) {

        $scope.$apply(function ($scope) {
            $scope.files = element.files;
        });

    }

    $scope.Divac = function () {

        $scope.addProduct = true;
    }

})



//Upload img Controller

﻿


//Product controller
app.controller("myProductCtrl", function ($scope, myProductService) {



    $scope.getAllProducts = function () {

        var getData = myProductService.getProducts();

        getData.then(function (product) {
            console.log(product)
            $scope.product = product.data;
            console.log(new Date(parseInt(product.SKT.substr(6))))
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


    $scope.deleteProduct = function (product) {

        console.log(product)

        var delProduct = myProductService.deleteProduct(product).then(function (msg) {

            alert("Deleted");
            console.log(delProduct)
        });
        Location.reload();

    }
});

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

});



//user controller

//appUser.controller("myHomeCtrl", function ($scope, myHomeService) {

//    $scope.getAllDatas = function () {

//        var getData = myHomeService.getDatas();
//        console.log(getData)
//        getData.then(function (product) {
//            $scope.alldatas = product.data;
//        }, function () {
//            alert("veriler getirilemedi")
//        })
//    }

//    $scope.getAllCat = function () {

//        var getDatas = myHomeService.getDataCats();

//        console.log(getDatas)
//        getDatas.then(function (category) {
//            $scope.allcats = category.data;
//        }, function () {
//            alert("veriler getirilemedi")
//        })
//    }

//    $scope.date = function (veri) {

//        //var date = skt;
//        //var nowDate = new Date(parseInt(date.substr(6)));
//        //var result = "";
//        //result = nowDate.format("dd/mm/yyyy") + " : dd/mm/yyyy";
//        console.log(veri)
//        var completedDate = new Date(parseInt(veri.replace("/Date(", "").replace(")/")));
//        var dd = completedDate.getDate();
//        var mm = completedDate.getMonth() + 1; //January is 0! 
//        var yyyy = completedDate.getFullYear();
//        if (dd < 10) { dd = '0' + dd }
//        if (mm < 10) { mm = '0' + mm }
//        //var date = new Date(parseInt(skt.substr(6)));
//        var datee = dd + "." + mm + "." + yyyy;
//        console.log(datee)
//        $scope.sonuc = datee;

//    }


//    //$scope.inventory = [
//    //    { id: 1, category: "water bottle", description: "small water bottle", price: 2.99, qty: 1 },
//    //    { id: 2, category: "water bottle", description: "large water bottle", price: 2.99, qty: 1, onSale: true },
//    //    { id: 3, category: "flashlight", description: "small flashlight", price: 6.99, qty: 1 },
//    //    { id: 4, category: "flashlight", description: "big flashlight", price: 12.99, qty: 1 },
//    //    { id: 5, category: "stove", description: "small stove", price: 29.99, qty: 1 },
//    //    { id: 6, category: "stove", description: "big stove", price: 29.99, qty: 1 },
//    //    { id: 7, category: "sleeping bag", description: "simple sleeping bag", price: 49.99, qty: 1 },
//    //    { id: 8, category: "sleeping bag", description: "deluxe sleeping bag", price: 79.99, qty: 1 },
//    //    { id: 9, category: "tent", description: "1-person tent", price: 119.99, qty: 1 },
//    //    { id: 10, category: "tent", description: "2-person tent", price: 169.99, qty: 1 },
//    //    { id: 11, category: "tent", description: "3-person tent", price: 249.99, qty: 1 },
//    //    { id: 12, category: "tent", description: "4-person tent", price: 319.99, qty: 1 }
//    //];

//    //$scope.cart = [];

//    //var findItemById = function (items, id) {
//    //    return _.find(items, function (item) {
//    //        return item.id === id;
//    //    });
//    //};

//    //$scope.getCost = function (item) {
//    //    return item.qty * item.price;
//    //};

//    //$scope.addItem = function (itemToAdd) {
//    //    var found = findItemById($scope.cart, itemToAdd.ProductId);
//    //    if (found) {
//    //        found.qty += itemToAdd.qty;
//    //    }
//    //    else {
//    //        $scope.cart.push(angular.copy(itemToAdd));
//    //    }
//    //};

//    //$scope.getTotal = function () {
//    //    var total = _.reduce($scope.cart, function (sum, item) {
//    //        return sum + $scope.getCost(item);
//    //    }, 0);
//    //    console.log('total: ' + total);
//    //    return total;
//    //};

//    //$scope.clearCart = function () {
//    //    $scope.cart.length = 0;
//    //};

//    //$scope.removeItem = function (item) {
//    //    var index = $scope.cart.indexOf(item);
//    //    $scope.cart.splice(index, 1);
//    //};

//});
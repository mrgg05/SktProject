
//Category Service
app.service("myCatService", function ($http) {

    this.getCategories = function () {
        return $http.get("/Categories/Index");
    }

    this.AddCategory = function (category) {
        var response = $http({
            method: "POST",
            url: "/Categories/Create",
            data: JSON.stringify(category),
            dataType: "json"
        })
        return response;

    }

})

//Product Service

app.service("myProductService", function ($http) {

    this.getProducts = function () {
        return $http.get("/Products/Index");
    }

    this.AddProduct = function (product) {
        var response = $http({
            method: "POST",
            url: "/Product/Create",
            data: JSON.stringify(product),
            dataType: "json"
        })
        return response;

    }

})
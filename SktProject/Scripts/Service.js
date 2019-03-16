


app.service("myProductService", function ($http) {

    this.getProducts = function () {
        return $http.get("/Products/Index");
    }



})

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

    this.DeleteCat = function (category) {

        var response = $http({
            method: "POST",
            url: "/Categories/Delete",
            data: JSON.stringify(category),
            dataType: "json"
        })
        return response;
        
    }

})

//home service

appUser.service("myHomeService", function ($http) {

    this.getDatas = function () {
        return $http.get("/Home/Index1");
    }

    this.getDataCat = function () {
        return $http.get("/Home/Index2");
    }



})

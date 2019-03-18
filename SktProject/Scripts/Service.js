


app.service("myProductService", function ($http) {

    this.getProducts = function () {
        return $http.get("/Products/Index");
    }

    this.deleteProduct = function (id) {

        var response = $http.post({
            method: "POST",
            url: "/Admin/Delete/",
            data: JSON.stringify(id), // or JSON.stringify ({name: 'jonas'}),
        
            contentType: "application/json",
            dataType: "json"
           
          
        });

        console.log(response);
        return response;
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

//appUser.service("myHomeService", function ($http) {

//    this.getDatas = function () {
//        return $http.get("/Home/IndexProduct");
//    }

//    this.getDataCats = function () {
//        return $http.get("IndexCat");
//    }



//})





var appMain = angular.module('admin', ["ngRoute"]);

appMain.controller('adminCtrl', function ($scope, $interval, $http , $window ) {
    $scope.clz1 = "nav-link active";
    $scope.clz2 = "nav-link ";

    $scope.pageIndex = 0;

    $scope.alertBox = "hide";
    $scope.alert = "hide";

    $scope.tableclzM = "";
    $scope.alertM = "hide";
    $scope.alertBox1M = "hide";
    $scope.alertBox2M = "hide";

    $scope.storeMAnagerDetails = {}


    $scope.orderDetailsArray = [];
    $scope.storeMAnagerDetailsArray = [];



    $scope.classForUpdateStoreMangerTextBox = "hide";
    $scope.classForUpdateStoreMangerLoader= "hide";

    $scope.changeIndex = function (indexToChange) {
        if (indexToChange == 0) {
            $scope.clz1 = "nav-link active";
            $scope.clz2 = "nav-link ";
            $scope.clz3 = "nav-link ";
            getOrders();
        }
        if (indexToChange == 1) {
            $scope.clz1 = "nav-link ";
            $scope.clz2 = "nav-link active";
            $scope.clz3 = "nav-link ";
            getDetailsofStoreManger();
        }

        $scope.pageIndex = indexToChange;
    }


    var tick = function () {
        $scope.clock = Date.now();
    }
    tick();
    $interval(tick, 1000);


    var date = new Date();
    var TodaydateArray = [];

    TodaydateArray = date.toString().split(' ');
    $scope.displayTodayDate = "     " + TodaydateArray[1] + "/" + TodaydateArray[2] + "/" + TodaydateArray[3] + "\t" + "\t";




    //Get all Data from StoreManger collection
    var getDetailsofStoreManger = function () {
        $scope.storeMAnagerDetails = {};
        $scope.tableclzM = "table hide";
        $scope.alertM = "hide";
        $scope.alertBox2M = "show form-inline";

       /* $http({
            method: 'GET',
            url: 'http://localhost:5000/storemanagers'
        }).then(
            function(res) { // success
                //$scope.employees =
                console.log(res.data);
            },
            function(res) { // error
                console.log("Error: " + res.status + " : " + res.data);
            }
        );*/

         $http({
            method: 'GET',
            url: 'http://localhost:5000/storemanagers'
            }).then(function (response) {
                console.log(response);
                $scope.storeMAnagerDetailsArray = response.data;


            })
            .finally(function () {
                 if($scope.storeMAnagerDetailsArray.length == 0 ){
                     $scope.alertM = "show";
                     $scope.tableclzM = "table hide";
 
                 }
                 else {
                     $scope.alertM = "hide";
                     $scope.tableclzM = "table show";
 
                 }
                 $scope.alertBox2M = "hide";

            })
    }
    getDetailsofStoreManger();


    //Add StoreManger
    $scope.addStoreManager = function () {

        if($scope.storeMAnagerDetails.firstname == null || $scope.storeMAnagerDetails.lastname == null || $scope.storeMAnagerDetails.address1 == null || $scope.storeMAnagerDetails.Email == null || $scope.storeMAnagerDetails.mobileNumber == null || $scope.storeMAnagerDetails.password == null  ){
            console.log("Please fill all the fields");
        }
        else
        {
            $scope.alertBox1M = "show";
            var StoreManagerObj = {
                first: $scope.storeMAnagerDetails.firstname,
                second: $scope.storeMAnagerDetails.lastname,
                address1: $scope.storeMAnagerDetails.address1,
                address2: $scope.storeMAnagerDetails.address2,
                email: $scope.storeMAnagerDetails.Email,
                mobile: $scope.storeMAnagerDetails.mobileNumber,
                password: $scope.storeMAnagerDetails.password
            };

            console.log(StoreManagerObj);
            $http({
                method: 'POST',
                url: 'http://localhost:5000/storemanagers',
                data : StoreManagerObj
            }).then(function (response) {
                console.log(response.data)
                if (response != null) {
                    $scope.alertBox1M = "hide";
                   // $('#saveStoreManager').modal('show');
                    getDetailsofStoreManger();
                    $scope.storeMAnagerDetails = {};

                } else {
                    alert('Error in saving');
                }
            },
                function(res) { // error
                    console.log("Error: " + res.status + " : " + res.data);
                });
        }
    }

    //deleteing StoreManger
    var currentDeleteIDStoreManger = 0;
    $scope.deleteStoreManger = function (index) {
        currentDeleteIDStoreManger = index;
        console.log(index);
    }

    $scope.deleteStoreMangerConfirm = function () {
        $http({
            method: 'DELETE',
            url: 'http://localhost:5000/storemanagers/' + currentDeleteIDStoreManger,
        }).then(function (response) {
            if (response != true) {
                alert('Item Deleted successfully');
                getDetailsofStoreManger();
            } else {
                alert('Error in deleting');
            }
        });
    }


    //updating category
    var currentUpdateIDstoreManger = 0;
    $scope.updateStoreManger = function (index) {
        $scope.classForUpdateStoreMangerTextBox = "hide";
        $scope.classForUpdateStoreMangerLoader= "show";
        currentUpdateIDstoreManger = index;
        console.log(index);
        $http({
            method: 'GET',
            url: 'http://localhost:5000/storemanagers/'+ currentUpdateIDstoreManger
        })
            .then(function (response) {
                console.log(response);
                $scope.storeMAnagerDetails.UpdateName1 = response.data.first;
                $scope.storeMAnagerDetails.UpdateName2 = response.data.second;
                $scope.storeMAnagerDetails.UpdateAdd1 = response.data.address1;
                $scope.storeMAnagerDetails.UpdateAdd2 = response.data.address2;
                $scope.storeMAnagerDetails.UpdateEmail = response.data.email;
                $scope.storeMAnagerDetails.UpdateMobile = response.data.mobile;
                $scope.storeMAnagerDetails.UpdatePassword = response.data.password;
                $scope.classForUpdateStoreMangerTextBox = "show";
                $scope.classForUpdateStoreMangerLoader= "hide";


            })

    }

    $scope.updateStoreMangerConfirm = function () {
        console.log(currentUpdateIDstoreManger);
        var StoreMangerUpdateObj = {
            id : currentUpdateIDstoreManger ,
            first :  $scope.storeMAnagerDetails.UpdateName1,
            second : $scope.storeMAnagerDetails.UpdateName2 ,
            address1 : $scope.storeMAnagerDetails.UpdateAdd1 ,
            address2 : $scope.storeMAnagerDetails.UpdateAdd2,
            email : $scope.storeMAnagerDetails.UpdateEmail,
            mobile : $scope.storeMAnagerDetails.UpdateMobile ,
            password : $scope.storeMAnagerDetails.UpdatePassword


        };
        $http({
            method: 'PUT',
            url: 'http://localhost:5000/storemanagers/' + currentUpdateIDstoreManger,
            data : StoreMangerUpdateObj
        }).then(function (response) {
            console.log(response.data)
            if (response != null) {
                $scope.storeMAnagerDetails = {};
                getDetailsofStoreManger();

            } else {
                alert('Error in saving');
            }
        });

    }

    //get all orders
    var getOrders = function (){
        $scope.alertBox = "show";
        $http({
            method: 'GET',
            url: 'http://localhost:5000/orders'
        }).then(function (response) {
            console.log(response);
            $scope.orderDetailsArray = response.data;

            $scope.alertBox = "hide";
            //window.location.reload();
        })
            .finally(function () {
                if($scope.orderDetailsArray.length == 0 ){
                    $scope.alert = "show";


                }
                else {


                }


            })
    }
    getOrders();
    $scope.DeleteOrder = function (index) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:5000/orders/' + index,
        }).then(function (response) {
            if (response != true) {
                alert('Item Deleted successfully');
                getOrders();
            } else {
                alert('Error in deleting');
            }
        });
    }

    $scope.logOut = function () {
        localStorage.removeItem("loggedInUser");
        $window.location.href = '../';
    }
});




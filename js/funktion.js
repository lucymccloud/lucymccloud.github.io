

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB44uOkaZYNceHZBqBqqLChpGGmrN92gnI",
    authDomain: "lucy-mccloud-kommentarer.firebaseapp.com",
    databaseURL: "https://lucy-mccloud-kommentarer.firebaseio.com",
    projectId: "lucy-mccloud-kommentarer",
    storageBucket: "",
    messagingSenderId: "727882647839"
  };
firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    $scope.kommentar = {
    text: "",
    skribent: ""
    };
    
    $scope.addComment = function() {
        // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
        // Det sparas automatiskt i Firebase-databasen.
        $scope.kommentarer.$add($scope.kommentar);

        // Tömmer texten i kommentarfältet
        $scope.kommentar = {
            text: "",
            skribent: ""
        };
    };
  }
);
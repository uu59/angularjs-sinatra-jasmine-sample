function FooCtrl($scope) {
  $scope.title = "Fooです";
  $scope.array = [
    {name: 1},
    {name: 2},
    {name: 3}
  ];
  var counter = 3;
  $scope.append = function() {
    $scope.array.push({name: ++counter});
  }
}

function BarCtrl($scope) {
  $scope.title = "Barです";
  $scope.array = [
    {name: "a"},
    {name: "b"}
  ];
  $scope.append = function() {
    $scope.array.push({name: "Z"});
  }
}


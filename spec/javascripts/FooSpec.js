describe("FooCtrl", function() {
  var $rootScope;
  var ctrl;
  var scope;

  beforeEach(inject(function($injector){
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    scope = $rootScope.$new();
    ctrl = $controller(FooCtrl, {'$scope': scope});
  }));

  it("ctrl initialize", function(){
    expect(scope.array).toEqual([{name:1}, {name:2}, {name:3}]);
    expect(scope.title).toEqual("Fooです");
  });

  it("#append", function(){
    scope.append();
    expect(scope.array).toEqual([{name:1}, {name:2}, {name:3}, {name:4}]);
    scope.append();
    expect(scope.array).toEqual([{name:1}, {name:2}, {name:3}, {name:4}, {name:5}]);
  });
});


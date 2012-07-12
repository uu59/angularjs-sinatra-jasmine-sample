describe("BarCtrl", function() {
  var $rootScope;
  var ctrl;
  var scope;

  beforeEach(inject(function($injector){
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    scope = $rootScope.$new();
    ctrl = $controller(BarCtrl, {'$scope': scope});
  }));

  it("ctrl initialize", function(){
    expect(scope.array).toEqual([{name: "a"}, {name: "b"}]);
    expect(scope.title).toEqual("Barです");
  });

  it("#append", function(){
    scope.append();
    expect(scope.array).toEqual([{name: "a"}, {name: "b"}, {name: "Z"}]);
    scope.append();
    expect(scope.array).toEqual([{name: "a"}, {name: "b"}, {name: "Z"}, {name: "Z"}]);
  });
});


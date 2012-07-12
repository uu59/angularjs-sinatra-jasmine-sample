# -- coding: utf-8

require "rubygems"
require "bundler/setup"
Bundler.require

get "/" do
  erb :index
end

__END__

@@ layout
<!DOCTYPE>
<html>
<body>
<%= yield %>
</body>
</html>

@@ index
<script src="/angular-1.0.1.js"></script>
<script>
// fooモジュールの定義。["ng"]でngモジュールへの依存を指定
angular.module('foo', ["ng"]);
</script>
<script src="/ctrl.js"></script>

<div ng-app="foo">
  <div ng-init="items=[1,2,3]"><!-- items = JSON.parse("[1,2,3]")される -->
    <ul>
      <li ng-repeat="item in items"><!-- 普通のループ -->
      {{item}}
      </li>
    </ul>

    <div ng-controller="FooCtrl">
      <h1 ng-click="append()">{{ title }}</h1>
      <p ng-repeat="a in array">{{ a.name }}</p>
    </div>

    <div ng-controller="BarCtrl">
      <h1 ng-click="append()">{{ title }}</h1>
      <p ng-repeat="a in array">{{ a.name }}</p>
    </div>
  </div>
</div>

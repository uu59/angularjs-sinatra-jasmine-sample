# -- coding: utf-8

require "spec_helper"

describe "app", :js => true do
  it "ちゃんとAngularによってレンダリングされる" do
    visit "/"
    page.should have_content("Fooです")

    repeat = page.evaluate_script <<-JS
    document.querySelectorAll('div[ng-controller="BarCtrl"] p').length;
    JS
    repeat.should == 2;
  end
end

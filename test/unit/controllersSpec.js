'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should create an instance of HomeCtrl', inject(function($controller) {
    //spec body
    var scope = {}, ctrl = $controller('HomeCtrl', { $scope:scope});
    expect(ctrl).toBeDefined();
  }));

  it('should create an instance of ContactCtrl', inject(function($controller) {
    //spec body
    var scope = {}, ctrl = $controller('ContactCtrl', { $scope:scope});
    expect(ctrl).toBeDefined();
  }));

  it('should create an instance of AboutCtrl', inject(function($controller) {
    //spec body
    var scope = {}, ctrl = $controller('AboutCtrl', { $scope:scope});
    expect(ctrl).toBeDefined();
  }));

  it('should create an instance of ClassesCtrl', inject(function($controller) {
    var scope = {}, ctrl = $controller('ClassesCtrl', { $scope:scope});
    expect(scope.classes).toBeDefined();
    expect(scope.classes.length).toBe(5);
  }));

  it('should return 5 classes from ClassesCtrl', inject(function($controller) {
    var scope = {}, ctrl = $controller('ClassesCtrl', { $scope:scope});
    expect(scope.classes).toBeDefined();
    expect(scope.classes.length).toBe(5);
  }));

  it('should create an instance of TimetableCtrl', inject(function($controller) {
    //spec body
    var scope = {}, ctrl = $controller('TimetableCtrl', { $scope:scope});
    expect(ctrl).toBeDefined();
  }));

    it('should create an instance of OtherTherapiesCtrl', inject(function($controller) {
    //spec body
    var scope = {}, ctrl = $controller('OtherTherapiesCtrl', { $scope:scope});
    expect(ctrl).toBeDefined();
  }));
});

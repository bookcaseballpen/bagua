var app = angular.module('myApp', []);
app.controller('myCtrl',function($scope){

  $scope.convert = function() {
    var order = parseInt($scope.input, 2);
    $scope.output = list[order];
  }
  var list = [
    {title:"乾为天", sn:"0", order:"000000", luck:"大吉", yinyang:"", desc:""},
    {title:"天风姤", sn:"1", order:"000001", luck:"吉", yinyang:"", desc:""},
    {title:"天火同人", sn:"2", order:"000010", luck:"吉", yinyang:"", desc:"君臣同心"},
    {title:"天山遁", sn:"3", order:"000011", luck:"小凶", yinyang:"", desc:"君子逃"},
    {title:"天泽履", sn:"4", order:"000100", luck:"凶", yinyang:"", desc:"图国不谋"},
    {title:"天水讼", sn:"5", order:"000101", luck:"凶", yinyang:"", desc:"前有所得，后有所失"},
    {title:"天地否", sn:"6", order:"000111", luck:"凶", yinyang:"", desc:"前有所得，后有所失"},
  ];
});

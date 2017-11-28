var app = angular.module('app', []);

app.controller('HomeController', function($scope) {

  $scope.goal_title = "neumant.io";

  $scope.dates = [
    1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021
  ];

  $scope.goal_real_estate = false;

  for (x in $scope.dates) {
      if($scope.dates[x]== 2016){
        $scope.goal_real_estate_2016 = true;
      }else if($scope.dates[x]== 2021){
        $scope.goal_retirement_2021 = true;
      }else if($scope.dates[x]== 2018){
        $scope.goal_involve_2018 = true;
      }
  }

});

$(document).ready(function(e) {
  var viewport =Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log(viewport);


  $('a').click(function(e){
    e.preventDefault()
  })

  $('.goal_wrap').click(function(){
    var diff = $(this).parent()[0].offsetLeft;
    $('.date .goal_wrap').removeClass('active bounce');
    $(this).addClass('active bounce');
    console.log(diff);
    console.log((viewport - diff));
TweenLite.to($('.date').parent(), 1, {x:((viewport*0.5) - diff), onComplete:function(){
        console.log('success');
        /*TweenLite.to($('.timeline'), 1, {top:"50%"});*/
      }});
  });

  $('.goal_real_estate').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(http://extrawall.net/images/wallpapers/378_1920x1080_abstract_city.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_retirement').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(https://wallpaperscraft.com/image/tropics_sea_palm_trees_vacation_84858_2412x1810.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_involve').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(http://www.churchmilitant.com/images/uploads/2015-06-12-niles-x.jpg)');
}).fadeTo('slow', 1);

  });


});

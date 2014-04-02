'use strict';

/* Controllers */
var controllers = angular.module('myApp.controllers', []);

controllers.controller('HomeCtrl', [function() { }]);
controllers.controller('ContactCtrl', [function() { }]);
controllers.controller('AboutCtrl', [function() { }]);
controllers.controller('OtherTherapiesCtrl', [function() { }]);

controllers.controller('ClassesCtrl', ['$scope', 
    function($scope) {
      $scope.classes = [
        {title:'Beginners Yoga',description:'A class specially designed to introduce yoga to those with no experience.  The classic poses are studied in a relaxed and friendly class, dispelling all myths that yoga is only for the abnormally bendy!'},
        {title:'Continuation Yoga',description:'Designed for those with a little more experience, with deeper and more challenging posture work, breathing exercises and relaxation.'},
        {title:'Parent and Child Yoga',description:'Designed to promote and nurture the bond between parents and children, in a fun and non-competitive environment.  Some poses can be practiced as individuals where each person is encouraged to \'be the best they can\', whilst others will need the help and support of the parent (or child!). Aimed at children from 2 - 9 years of age, although this is flexible.'},
        {title:'Kids Yoga',description:'When a child feels they are ready to join a yoga class on their own, this is the one for them.  Still taught in a relaxed manner, the class is designed to promote self-confidence at a difficult and emotional time in a child\'s life.  Aimed at 10 - 16 year olds.'},
        {title:'Chair based yoga exercises',description:'Specifically designed for the chair bound or those with problems standing for long periods of time, this class covers many of the anti-arthritic series of movements as well as some fun yoga games.  Aimed primarily at nursing/residential home situations, this class can be arranged for any group environment.'}
      ];
    }]);

controllers.controller('TimetableCtrl', ['$scope', 
    function($scope) {
      $scope.timetable = [
        {
          day:'Monday',
          classes:[
            {
              time:'7:00pm - 8:00pm',
              type:'Beginners Yoga',
              location:{
                name:'Private Class', 
                map_link:''
              }
            }
          ]
        },
        {
          day:'Tuesday',
          classes:[
            {
              time:'7:00pm - 8:00pm',
              type:'Beginners Yoga',
              location:{
                name:'Agapé Centre Belfast', 
                map_link:'http://www.agapecentrebelfast.org/contact-us/map-directions/'
              }
            },
            {
              time:'8:00pm - 9:00pm',
              type:'Beginners Yoga',
              location:{
                name:'Agapé Centre Belfast', 
                map_link:'http://www.agapecentrebelfast.org/contact-us/map-directions/'
              }
            }
          ]
        },
        {
          day:'Friday',
          classes:[
            {
              time:'2:30pm - 3:30pm',
              type:'Chair Yoga',
              location:{
                name:'Private Class', 
                map_link:''
              }
            }
          ]
        },
        {
          day:'Saturday',
          classes:[
            {
              time:'10:00am - 12:00pm',
              type:'Yoga Workshops',
              location:{
                name:'Cresent Arts Centre, Belfast', 
                map_link:'http://www.crescentarts.org/content.cfm?ck=23'
              }
            }
          ]
        },
      ];
    }]);
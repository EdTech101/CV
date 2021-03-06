/*configurations for translations*/
(function() {
  app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.determinePreferredLanguage();
    $translateProvider.useSanitizeValueStrategy('sanitize');
    /*  $translateProvider.translations('en',{
    "common": {
    "tittle": "Software Developer",
    "tittleN": "Network Engineer",
    "name": "Edwin Veroes"
    },
    "index": {
    "age": "Age",
    "address": "Address",
    "email": "e-mail",
    "cellphone": "Phone"
    },
    "timeline": {
    "born":"Born",
    "bithDate":"January 11, 1994",
    "bachelor": {
    "title": "High School Diploma in Science",
    "date": "26 July 2010",
    "duration": "5 years",
    "description": "In Venezuela, the title of Bachelor of the Republic is awarded to the student who completed 5 years of secondary school(3 of secondary education and 2 of diversified) plus 6 years of elementary school(Basic Education)."
    },
    "webDev": {
    "title": "Introduction to Web Development Course (first part)",
    "date": "November 2015",
    "duration": "40 hours",
    "description": "In this course you will learn how to develop a website autonomously, without the help of and without the help of a web page program. Once the website is finished you will be able to publish it on the Internet so that it can be visited by anyone. Does it seem difficult? You may now perceive it as a challenge, as something impossible,but when you finish the course you will be able to do it we assure you.",
    }
    }
    }
    );*/
    $translateProvider.useUrlLoader('http://localhost:3000/locale');  
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useLocalStorage();
    $translateProvider.use('en');
  }]);

})();

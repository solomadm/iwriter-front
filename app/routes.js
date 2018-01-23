/**
 * define different layouts for members and users
 */
var headerUserTmpl = '_layouts/header-user.html';
var headerMemberTmpl = '_layouts/header-member.html';
var footerTmpl = '_layouts/footer.html';
var themeFooterScripts = '_layouts/theme-footer-scripts.html';


/**
 * Define routes and corresponded route params
 */
iwriterApp.config(['$stateProvider', '$urlRouterProvider', '$authProvider',
    function($stateProvider, $urlRouterProvider, $authProvider){

        /**  Specific cases of URL  **/
        $urlRouterProvider
            .when('', ['$state','$match', function ($state, $match) {
                $state.go('home');
            }])
        //.otherwise('/');


        /**  States  **/
        $stateProvider
            .state('home',{
                url: '/',
                views:{
                    'header' : {
                        templateUrl: 'pages/'+headerUserTmpl,
                    },
                    'content' :{
                        templateUrl: 'pages/home/home.html',
                        controller: 'homeController'
                    },
                    'footer' : {
                        templateUrl: 'pages/'+footerTmpl,
                    },
                    'themeFooterScripts':{
                        templateUrl: 'pages/'+themeFooterScripts,
                    }
                }
            })

            .state('login',{
                url:'/login',
                views:{
                    'header' : {
                        templateUrl: 'pages/'+headerUserTmpl,
                    },
                    'content' :{
                        templateUrl: 'pages/login/login.html',
                        controller: 'loginController'
                    },
                    'footer' : {
                        templateUrl: 'pages/'+footerTmpl,
                    },
                    'themeFooterScripts':{
                        templateUrl: 'pages/'+themeFooterScripts,
                    }
                }
            })

            .state('dashboard-client',{
                url: '/client-dashboard',
                views:{
                    'header' : {
                        templateUrl: 'pages/'+headerMemberTmpl,
                    },
                    'content' :{
                        templateUrl: 'pages/dashboard-client/dashboard-client.html',
                        controller: 'dashboardClientController'
                    },
                    'footer' : {
                        templateUrl: 'pages/'+footerTmpl,
                    },
                    'themeFooterScripts':{
                        templateUrl: 'pages/'+themeFooterScripts,
                    }
                }
            });

        /* Authentication is available via satellizer module */
        $authProvider.loginUrl = 'http://iwriter.back/api/users/login';
    }
]);
/**
 * Created by karlvaniseghem on 25/05/15.
 */
function config($httpProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
    $urlRouterProvider.otherwise('/index/main');

    $ocLazyLoadProvider.config({
        debug: false
    });

    $breadcrumbProvider.setOptions({
        prefixStateName: 'index.main',
        includeAbstract: true
    });

    /* STATES */
    $stateProvider
        .state('index', {
            abstract: true,
            url: '/index',
            views: {
                'main': {
                    templateUrl: 'views/dashboard'
                }
            }
        })
        .state('index.main', {
            url: '/main',
            views: {
                'slider': {
                    templateUrl: 'views/dashboard/slider'
                },
                'banner-set':{
                    templateUrl: 'views/dashboard/blog-list'
                }
            },
            data: {pageTitle: 'Dashboard'},
            ncyBreadcrumb: {
                label: 'Start'
            }
        })

        .state('theme', {
            abstract: true,
            url: '/theme',
            views: {
                main: {
                    templateUrl: 'views/common/content'
                }
            },
            ncyBreadcrumb: {
                label: 'Jaarthema'
            }
        })
        .state('theme.pimpyourschool', {
            url: '/pimpyourschool',
            views: {
                'content': {
                    templateUrl: 'views/theme/pimpyourschool'
                }
            },
            data: {pageTitle: 'Thema: Pimp je school'},
            ncyBreadcrumb: {
                label: 'Pimp je school'
            }
        })
        .state('info', {
            abstract: true,
            url: '/info',
            views: {
                main: {
                    templateUrl: 'views/common/content'
                }
            },
            ncyBreadcrumb: {
                label: 'Info'
            }
        })
        .state('info.aboutus', {
            url: '/aboutus',
            views: {
                content: {
                    templateUrl: 'views/info/aboutus'
                }
            },
            data: {pageTitle: 'Over ons'},
            ncyBreadcrumb: {
                label: 'Over ons'
            }
        })
        .state('info.contactus', {
            url: '/contactus',
            views: {
                content: {
                    templateUrl: 'views/info/contactus'
                }
            },
            data: {pageTitle: 'Contacteer ons'},
            ncyBreadcrumb: {
                label: 'Contacteer ons'
            }
        });
};

angular
    .module('portal')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;

        $rootScope.$on('$viewContentLoaded',function(){
            $('html, body').animate({ scrollTop: 0 }, 200);
        })
    });
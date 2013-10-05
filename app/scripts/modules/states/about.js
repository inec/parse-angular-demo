angular.module('about', ['ParseServices', 'ExternalDataServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('about', {
		abstract: true,
    	templateUrl: 'app/views/app-layout.html'
    })
    .state('about.list', {
    	url: '/about',
    	views: {
    		'panel@about': {
    			templateUrl: 'app/views/demo.html',
                controller: 'MasterDetailController',
                resolve: {
                    'monsters': ['MonsterService', function(MonsterService) {

                        // get the collection from our data definitions
                        var monsters = new MonsterService.collection;

                        // use the extended Parse SDK to load the whole collection
                        return monsters.load();

                    }]
                }
    		},
    		'detail@about.list' : {
    			templateUrl: 'app/views/detail/about.list.html'
    		}

    	}
    })
    .state('about.list.state', {
    	url: '/state',
    	views: {

    		'detail@about.list' : {
    			templateUrl: 'app/views/detail/about.list.state.html'
    		}

    	}
    })

    .state('about.list.theme', {
    	url: '/theme',
    	views: {

    		'detail@about.list' : {
    			templateUrl: 'app/views/detail/about.list.theme.html'
    		}

    	}
    })

    .state('about.list.bootstrap', {
    	url: '/bootstrap',
    	views: {

    		'detail@about.list' : {
    			templateUrl: 'app/views/detail/about.list.bootstrap.html'
    		}

    	}
    })

    .state('about.list.fontAwesome', {
    	url: '/font-awesome',
    	views: {

    		'detail@about.list' : {
    			templateUrl: 'app/views/detail/about.list.font-awesome.html'
    		}

    	}
    })

	

}])
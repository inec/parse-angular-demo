angular.module('ParseServices', [])
.factory('ParseSDK', function() {

  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("OOq7zpzbzpEPjM7nWVJpbD7AKn8atU6f49CBweoF", "PXUcZ84TBsMLhxHFhqB2EuBZzLxiKZJmcwlnKeNh");
  //Parse.initialize("oInJV2JlcXR96EN0SQjee0n5FlRUAd0joyFXReve", "OOZa6rsbkIiRWyiNlmHVMgMIHAyTqPdHRg7N1PxO");

  // FACEBOOK init
  window.fbPromise.then(function() {

    Parse.FacebookUtils.init({

      // pro-tip: swap App ID out for PROD App ID automatically on deploy using grunt-replace
      appId: 386206958244456, // Facebook App ID 386206958244456 481650395275919
      channelUrl: 'http://inec.github.io/parse-angular-demo/channel.html', // Channel File
      cookie: true, // enable cookies to allow Parse to access the session
      xfbml: true, // parse XFBML
      frictionlessRequests: true // recommended

    });

  });

});
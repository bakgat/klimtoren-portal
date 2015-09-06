/**
 * Created by karlvaniseghem on 25/05/15.
 */
function Blog($resource) {
    return $resource('/api/blogs/:id');
}
function Facebook($resource) {
    return $resource('https://graph.facebook.com/10206744525794462/accounts?access_token=CAACEdEose0cBAOJsUafcrUAdZA8I7nCUQBunuegZBQFxegpTyHDPXpbdhQZATmKcoiJRnKeBDSwy4cirdSFKDK2PNFU8d9ClPiKlavZC7ZBp0jhXG2MW7dgyE8JWISzcn2QAoNqZCnWnv0g1iXqZAezyRuzWcA2B5VIoZBzNbdrYpGEh4ZCNs20Di2c97QOSQFbpifVgpWhcy9gZDZ');
}
angular.module('portal')
    .factory('Blog', Blog)
    .factory('Facebook', Facebook);
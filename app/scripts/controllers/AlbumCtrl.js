(function () {
  function AlbumCtrl($scope) {
    $scope.albumData = angular.copy(albumPicasso);
    $scope.songData = albumPicasso.songs;
  }


  angular
      .module('blocJams')
      .controller('AlbumCtrl', AlbumCtrl);
})();

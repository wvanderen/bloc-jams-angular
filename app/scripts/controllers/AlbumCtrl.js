(function () {
  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum;
    this.songData = albumPicasso.songs;
  }


  angular
      .module('blocJams')
      .controller('AlbumCtrl', [Fixtures, AlbumCtrl]);
})();

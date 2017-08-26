(function () {
  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();
    this.songData = this.albumData.songs;
  }


  angular
      .module('blocJams')
      .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();

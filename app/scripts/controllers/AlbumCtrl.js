(function () {
  function AlbumCtrl(Fixtures, SongPlayer) {
    this.albumData = Fixtures.getAlbum();
    this.songData = this.albumData.songs;
    this.songPlayer = SongPlayer;
  }


  angular
      .module('blocJams')
      .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();

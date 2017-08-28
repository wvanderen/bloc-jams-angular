(function() {
  function SongPlayer() {
    var SongPlayer = {};

    /**
    @desc Stores currently playing song object
    @type {Object}
    */
    var currentSong = null;
    
    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {object} song
    */
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentSong = song;
    };

    /**
    * @function playSong
    * @desc Starts playing a new song and sets the playing condition to true
    * @param {object} song
    */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };

    /**
    * @function SongPlayer.play
    * @desc Checks to see if current song is equal to the selected song. If it isn't, it plays it. If it is, we make sure the song is paused, then play it
    * @param {object} song
    */
    SongPlayer.play = function(song) {
      if (currentSong !== song) {
        setSong(song);
        playSong(song);

      } else if (currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          currentBuzzObject.play();
        }
      }
    };

    /**
    * @function SongPlayer.pause
    * @desc Pauses the song and sets the playing property to false
    * @param {object} song
    */
    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    };

    return SongPlayer;
  }

  angular
      .module('blocJams')
      .factory('SongPlayer', SongPlayer);
})();

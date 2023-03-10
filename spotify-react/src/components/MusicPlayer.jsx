import { AiOutlineHeart } from "react-icons/ai";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsPlayFill, BsFillVolumeDownFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const MusicPlayer = () => {
  let selectedFromRedux = useSelector((state) => state.selected.currentSong);

  return (
    <div
      className="col-12 music-player w-100"
      style={{ width: "100%", position: "fixed", bottom: 0 }}
    >
      <div className="song-bar">
        {selectedFromRedux ? (
          <div className="song-infos">
            <div className="image-container">
              <img
                id="album-art"
                src={selectedFromRedux.album.cover_small}
                alt=""
              />
            </div>
            <div className="song-description">
              <p id="album-title" className="title">
                {selectedFromRedux.album.title}
              </p>
              <p id="album-artist" className="artist">
                {selectedFromRedux.artist.name}
              </p>
            </div>
          </div>
        ) : (
          <div className="song-infos">
            <div className="image-container">
              <img
                id="album-art"
                src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg"
                alt=""
              />
            </div>
            <div className="song-description">
              <p id="album-title" className="title">
                Watashitachi wa Sou Yatte Ikite Iku Jinshu na no
              </p>
              <p id="album-artist" className="artist">
                Masaru Yokoyama
              </p>
            </div>
          </div>
        )}
        <div className="icons">
          <i className="far fa-heart">
            <AiOutlineHeart className="h5" />
          </i>
          <i className="fas fa-compress"></i>
        </div>
      </div>
      <div className="progress-controller">
        <div className="control-buttons mt-4">
          <i className="fas fa-random"></i>
          <i className="fas fa-step-backward">
            <BiSkipPrevious className="h2" />
          </i>
          <i id="play-pause-btn" className="play-pause fas fa-play">
            <BsPlayFill />
          </i>
          <i className="fas fa-step-forward">
            <BiSkipNext className="h2" />
          </i>
          <i className="fas fa-undo-alt"></i>
        </div>
        <div className="progress-container mt-n4">
          <span id="time-over">0:49</span>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <span id="time-remaining">3:15</span>
        </div>
      </div>
      <div className="other-features">
        <i className="fas fa-list-ul"></i>
        <i className="fas fa-desktop"></i>
        <div className="volume-bar">
          <i className="fas fa-volume-down">
            <BsFillVolumeDownFill className="h2" />
          </i>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

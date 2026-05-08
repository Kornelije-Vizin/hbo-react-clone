const FeaturedMedia = () => {
  return (
    <div className="featured-media">
      <iframe
        className="featured-media__video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&playlist=NYH2sLid0Zc&start=16"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">
            Mortal Kombat
          </div>

          <div className="featured-media__playing">
            NOW PLAYING
          </div>

          <div className="featured-media__location">
            In theaters and on HBO MAX. Streaming throughout May 23.
          </div>

          <div className="featured-media__buttons">
            <button
              type="button"
              className="featured-media__play-btn"
            >
              <i className="fas fa-play" />
            </button>

            <button
              type="button"
              className="featured-media__info-btn"
            >
              MORE INFO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;

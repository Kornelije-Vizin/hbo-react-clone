import Link from 'next/link';
import Image from 'next/image';

const Account = () => {
  const watchList = Array.from({ length: 6 });

  return (
    <div className="account">
      <div className="account__details">
        <div className="account__title">My List</div>

        <div className="account__watch-list">
          {watchList.map((_, index) => (
            <div
              className="account__watch-video"
              key={index}
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0013/2874/2466/products/rick-and-morty-tv-invasion-poster-24-x-36-581_1024x.jpg?v=1616627934"
                alt="Rick and Morty TV Invasion Poster"
                width={300}
                height={450}
              />

              <div className="account__watch-overlay">
                <div className="account__watch-buttons">
                  <button
                    type="button"
                    className="account__watch-circle"
                    aria-label="Play"
                  >
                    <i className="fas fa-play" />
                  </button>

                  <button
                    type="button"
                    className="account__watch-circle"
                    aria-label="Remove from list"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="account__menu">
        <ul className="account__main">
          <li>
            <Link href="/" className="active">
              My List
            </Link>
          </li>
        </ul>

        <div className="side-nav__divider" />

        <ul className="account__main">
          <li>
            <Link href="/account">
              Account
            </Link>
          </li>

          <li>
            <Link href="/">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;

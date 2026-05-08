import Image from 'next/image';

const ForYouList = () => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let index = 1; index <= digit; index++) {
      thumbnails.push(
        <div key={index}>
          {comp}
        </div>
      );
    }

    return thumbnails;
  };

  return (
    <div className="foryou-list">
      <h3 className="foryou-list__title">
        For You
      </h3>

      <div className="foryou-list__thumbnails">
        {loopComp(
          <div className="foryou-list__thumbnail">
            <Image
              src="https://cdn.shopify.com/s/files/1/0013/2874/2466/products/rick-and-morty-tv-invasion-poster-24-x-36-581_1024x.jpg?v=1616627934"
              alt="Rick and Morty TV Invasion Poster"
              width={220}
              height={330}
            />

            <div className="foryou-list__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default ForYouList;

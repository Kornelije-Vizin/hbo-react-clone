import Image from 'next/image';

export default function CreateUser() {
  return (
    <main className="create-user">
      <div className="create-user__top">
        <div className="create-user__logo" />

        <span className="create-user__title">
          Who Is Watching?
        </span>
      </div>

      <div className="create-user__form">
        <Image
          className="create-user__user-img"
          src="https://api.unrealperson.com/image?name=image.45572.3545089.jpg&type=tpdne"
          alt="Random face picture"
          width={150}
          height={150}
        />

        <div className="create-user__input-group">
          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            type="text"
            className="create-user__inputText"
          />

          <div className="create-user__colors">
            <div
              className="create-user__color create-user__color--active"
              style={{
                background:
                  'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)',
              }}
            />

            <div
              className="create-user__color"
              style={{
                background:
                  'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(238,255,18,1) 100%)',
              }}
            />

            <div
              className="create-user__color"
              style={{
                background:
                  'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 100%)',
              }}
            />

            <div
              className="create-user__color"
              style={{
                background:
                  'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 100%)',
              }}
            />

            <div
              className="create-user__color"
              style={{
                background:
                  'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 100%)',
              }}
            />
          </div>
        </div>
      </div>

      <div className="create-user__buttons">
        <button
          type="button"
          className="create-user__cancel"
        >
          Cancel
        </button>

        <button
          type="button"
          className="create-user__save"
        >
          Save
        </button>
      </div>
    </main>
  );
}

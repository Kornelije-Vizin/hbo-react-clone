import Image from 'next/image';

export default function Home() {
  return (
    <main className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />

        <span className="login-user__title">
          Who Is Watching?
        </span>
      </div>

      <div className="login-user__form">
        <div className="login-user__user-box">
          <Image
            className="login-user__user-img"
            src="https://mighty.tools/mockmind-api/content/human/39.jpg"
            alt="Bryant profile"
            width={150}
            height={150}
          />

          <div className="login-user__user-name">
            Bryant
          </div>
        </div>
      </div>

      <div className="login-user__buttons">
        <button
          type="button"
          className="login-user__adult"
        >
          Add Adult
        </button>

        <button
          type="button"
          className="login-user__kid"
        >
          Add Kid
        </button>
      </div>
    </main>
  );
}

import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import Image from "next/image";

const Header = () => {
  return (
    <header className="top-header">
      <div className="top-header__left-side">
        <button
          type="button"
          className="top-header__menu-btn"
        >
          <i className="fas fa-bars" />
        </button>

        <button
          type="button"
          className="top-header__search-btn"
        >
          <i className="fas fa-search" />
        </button>
      </div>

      <div className="top-header__logo" />

      <div className="top-header__account">
        <Image
          src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg"
          className="top-header__user-img"
          alt="Bryant profile"
          width={30}
          height={30}
        />

        <div className="top-header__user-name">
          Bryant
        </div>
      </div>

      <Account />
      <SearchModal />
    </header>
  );
};

export default Header;

import Link from 'next/link';

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__close-btn">
        <i className="fas fa-times" />
      </div>

      <ul className="side-nav__main">
        <li>
          <Link href="/" className="active">
            Home
          </Link>
        </li>

        <li>
          <Link href="/">
            Series
          </Link>
        </li>

        <li>
          <Link href="/">
            Movies
          </Link>
        </li>

        <li>
          <Link href="/">
            Originals
          </Link>
        </li>
      </ul>

      <div className="side-nav__divider" />

      <ul className="side-nav__main">
        <li>
          <Link href="/">
            Action
          </Link>
        </li>

        <li>
          <Link href="/">
            Comedy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

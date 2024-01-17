import Link from 'next/link';

const SideNav = (props) => {
	return (
		<div className="side-nav">
			<div className="side-nav__close-btn">
				<i className="fas fa-times" />
			</div>
			<ul className="side-nav__main">
				<li>
				<Link href="/">
  					<a className="active">Home</a>
				</Link>
				</li>
				<Link href="/">
  					<a className="active">Series</a>
				</Link>
				<Link href="/">
  					<a className="active">Movies</a>
				</Link>
				<Link href="/">
  					<a className="active">Originals</a>
				</Link>
				<Link href="/">
  					<a className="active">Just Added</a>
				</Link>
				<Link href="/">
  					<a className="active">Last Chance</a>
				</Link>
				<Link href="/">
  					<a className="active">Coming Soon</a>
				</Link>
				<Link href="/">
  					<a className="active">Trending Now</a>
				</Link>
			</ul>
			<div className="side-nav__divider" />
			<ul className="side-nav__main">
				<Link href="/">
  					<a className="active">Action</a>
				</Link>
				<Link href="/">
  					<a className="active">Animation</a>
				</Link>
				<Link href="/">
  					<a className="active">Comedy</a>
				</Link>
				<Link href="/">
  					<a className="active">Crime</a>
				</Link>
				<Link href="/">
  					<a className="active">Documentaries</a>
				</Link>
				<Link href="/">
  					<a className="active">Drama</a>
				</Link>
				<Link href="/">
  					<a className="active">Fantasy & Sci-fi</a>
				</Link>
				<Link href="/">
  					<a className="active">Horror</a>
				</Link>
				<Link href="/">
  					<a className="active">International</a>
				</Link>
				<Link href="/">
  					<a className="active">Kids & Family</a>
				</Link>
				<Link href="/">
  					<a className="active">Latino</a>
				</Link>
				<Link href="/">
  					<a className="active">Music</a>
				</Link>
				<Link href="/">
  					<a className="active">News/Talk</a>
				</Link>
				<Link href="/">
  					<a className="active">Reality</a>
				</Link>
				<Link href="/">
  					<a className="active">Romance</a>
				</Link>
				<Link href="/">
  					<a className="active">Shorts</a>
				</Link>
				<Link href="/">
  					<a className="active">Sports</a>
				</Link>
				<Link href="/">
  					<a className="active">Suspence</a>
				</Link>
			</ul>
		</div>
	);
};

export default SideNav;

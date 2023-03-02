import BannerTop from "../assets/Asset_16_4x.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header>
      <img
        src={BannerTop}
        className="max-h-40 py-10 mx-auto"
        alt="Little lemon logo"
      />
      <nav className="navbar bg-base-200">
        <ul className="menu menu-horizontal mx-auto">
          {navigation.map((link) => (
            <li>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

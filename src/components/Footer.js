import FooterImage from "../assets/Asset_20_4x.png";

const Footer = () => {
  return (
    <footer className="lg:grid lg:grid-cols-2 mt-20">
      <div className="px-20">
        <img src={FooterImage} alt="littlelemon" className="h-72" />
      </div>
      <p className="py-10 text-xl font-semibold border-t-4">
        © 2023 Little Lemon
      </p>
    </footer>
  );
};

export default Footer;

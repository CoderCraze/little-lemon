import BannerHome from "../assets/banner_home.jpg";
import { cardsHome } from "../data";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <img
        className="max-h-96 rounded-2xl my-4 w-[95%] mx-auto object-bottom object-cover"
        src={BannerHome}
        alt="RestourantImage"
      />
      <div className="lg:grid lg:grid-cols-3 w-[95%] mx-auto gap-4">
        {cardsHome.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";

const Card = ({ title, image, link = "/", callToAction, description }) => {
  return (
    <div className="bg-base-300 rounded-xl p-4 items-center text-center">
      <h1 className="text-xl font-semibold mb-4 ">{title}</h1>
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-80 object-cover"
      />
      <p className="my-4">{description}</p>
      <Link to={link}>
        <button className="btn btn-primary">{callToAction}</button>
      </Link>
    </div>
  );
};

export default Card;

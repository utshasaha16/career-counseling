import { Link } from "react-router-dom";

const Services = ({ service }) => {

  const { image, serviceName, category, price, counselor, id } = service;
  return (
    <div className="card  bg-[#EBEBEB] ">
      <figure className="p-5">
        <img
          src={image}
          alt="counseling Image"
          className="rounded-xl w-full md:h-48 h-auto"
        />
      </figure>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{counselor}</h2>
          <p className="font-medium">{category}</p>
        </div>
        <h3 className="text-lg font-semibold mt-3">{serviceName}</h3>
        <p className="font-medium mt-3">Price: ${price}</p>
        <div className="flex mt-5 ">
          <Link to={`/serviceDetails/${id}`} className="px-10 py-2 bg-[#E09D15] rounded-lg text-white">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

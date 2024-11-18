const Services = ({ service }) => {
  const { image, serviceName, category, price, counselor } = service;
  return (
    <div className="card bg-[#EBEBEB] shadow-xl">
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
        <div className="mt-3">
        <button className="px-10 py-2 bg-[#E09D15] rounded-lg text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;

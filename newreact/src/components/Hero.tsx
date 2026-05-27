const Hero = () => {
  return (
    <div className="h-[550px] bg-[url(./assets/images/Banner2.jpg)] bg-no-repeat bg-cover bg-center flex items-center pl-5">
      <div className="text-white space-y-4">
        <button className="bg-yellow-400 text-white text-lg rounded-4xl py-2 px-10">
          New Arrivals 2026
        </button>
        <h1 className="font-bold text-6xl">Discover Your Perfect Style</h1>
        <p className="text-amber-100">
          Explore our latest collection of trendy fashion. Quality meets
          affordability.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-6 rounded-sm text-lg">
            Shop Now
          </button>
          <button className="border py-2 px-6 rounded-sm text-lg hover:bg-sky-500 hover:border-none transition duration-150 ease-in-out">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 

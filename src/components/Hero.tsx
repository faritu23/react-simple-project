

import Banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
    <section >
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex justify-between items-center gap-5">  
          <div>  
            <h1 className="text-5xl font-bold ">Build Your Ideal<br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack</span></h1>
          
            <p className="mt-5 max-w-lg text-sm text-gray-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            {/* Button */}
            <div className="mt-7 flex items-center gap-3"> 
              <button  className=" bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 text-white  text-xs  font-medium px-4  py-2
                  rounded-md hover:opacity-50 transition" >Explore Technologies</button>

              <button className=" border border-gray-200 text-gray-600 text-xs  font-medium px-4  py-2 rounded-md hover:bg-gray-100 transition">Learn More </button>
            </div>
          </div>


          {/* Right */}
          <div className="w-full md:w-1/2 flex justify-end">
            <img src={Banner} alt="oop!" className="w-80" />
          </div>

        </div>

      </div>
    </section>
    );
};

export default Hero;

import Logo from '../assets/images/bg-lion.png'
const Hero = () => {

  return (
    <>
      <section className="w-full h-screen text-white flex flex-col justify-center items-center text-center px-4 cursor-default bg-gradient-to-b from-gray-50 to-gray-100">
        <div className='flex flex-col justify-center items-center'>
          <img
            src={Logo}
            alt="Neutral Logo"
            className="h-28 w-28 rounded-3xl sm:h-44 sm:w-44 object-contain mb-6"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-wide my-6">
            Welcome! <br />
            <span className="text-blue-500 mt-4 block">Murad Group of Companies</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
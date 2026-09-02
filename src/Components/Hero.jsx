import heroImg from "../img/hero.avif";

const Hero = () => {
  return (
    <section className="pt-28 sm:pt-32 lg:pt-30">
      <div className="mx-auto grid grid-cols-1 items-center gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 ">
        
        <div>
          <p className="text-base font-bold text-[#5F755F] sm:text-lg lg:text-xl">
            A considered way to move
          </p>

          <h1 className="py-4 text-3xl font-bold text-[#173126] sm:text-4xl lg:text-3xl">
            Strength for the life you want to lead.
          </h1>

          <p className="max-w-xl text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
            Stillform is a welcoming space for thoughtful training,
            restorative movement, and steady progress—at your own pace.
          </p>

          <div className="my-8 flex flex-col gap-3 text-sm sm:my-10 sm:flex-row sm:items-center sm:gap-4">
            <button className="h-12 w-full rounded-full bg-[#173126] px-5 font-bold text-[#f8f5ee] sm:w-auto lg:px-7">
              Start your journey
            </button>

            <button className="h-12 w-full rounded-full border border-[#173126] px-5 font-bold text-[#173126] sm:w-auto lg:px-7">
              Explore Programmes
            </button>
          </div>

          <hr className="my-5 border-gray-300" />

          <div className="grid grid-cols-3 gap-6 pb-8 sm:gap-8">
            
            <div>
              <p className="text-xl font-bold text-[#173126] sm:text-2xl">
                12+
              </p>
              <p className="text-sm text-[#587158]">
                weekly class styles
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-[#173126] sm:text-2xl">
                1:8
              </p>
              <p className="text-sm text-[#587158]">
                thoughtful coach ratio
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-[#173126] sm:text-2xl">
                7 days
              </p>
              <p className="text-sm text-[#587158]">
                flexible movement
              </p>
            </div>

          </div>
        </div>

        <div className="w-full rounded-2xl bg-white p-2 sm:p-3">
          <img src={heroImg} alt=""
            className="h-87.5 w-full rounded-xl object-cover sm:h-112.5 md:h-125 lg:h-125"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;


import heroImg from '../img/hero.avif'

const Hero = () => {
  return (
    <div>
      <div className="mt-30 grid grid-cols-2 gap-20 mx-20">
        <div className=''>
          <p className="text-[#5F755F] font-bold text-xl">A considered way to move</p>
          <p className="text-[#173126] font-bold text-3xl py-5">
            Strength for the life you want to lead.
          </p>
          <p className="w-110 leading-8">
            Stillform is a welcoming space for thoughtful training, restorative
            movement, and steady progress—at your own pace.
          </p>

          <div className="flex gap-4 items-center text-sm my-10">
                <button className="h-12 rounded-full bg-[#173126] px-5 font-bold text-[#f8f5ee] lg:px-7">
                    Start your journey
                </button>
                <button className="mr-3 h-12 rounded-full border border-[#173126] px-5 font-bold text-[#173126] lg:px-7">
                    Explore Pogrammes
                </button>
          </div>
          <hr  className="my-5"/>

          <div className="flex gap-10 pb-10">
            <div>
                <p className='text-[#173126] font-bold text-2xl'>12+</p>
                <p className='text-[#587158]'>weekly class styles</p>
            </div>

            <div>
                <p className='text-[#173126] font-bold text-2xl'>1:8</p>
                <p className='text-[#587158]'>thoughtful coach ratio</p>
            </div>

            <div>
                <p className='text-[#173126] font-bold text-2xl'>7 days</p>
                <p className='text-[#587158]'>of flexible movement</p>
            </div>
          </div>
        </div>

        <div className='bg-white h-115 p-3 flex items-center rounded-2xl'>
            <img className='w-full h-109 m-auto rounded-2xl object-cover' src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

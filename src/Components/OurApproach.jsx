import Img1 from '../img/gym1.avif'
import Img2 from '../img/gym2.avif'
import Img3 from '../img/immj.webp'
import { Icon } from '@iconify/react';

const OurApproach = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-10 my-20 lg:my-30 px-5 sm:px-8 md:px-12'>
        <div className='flex gap-3 sm:gap-5 w-full lg:w-auto'>
          <div className='w-1/2 sm:w-auto'>
            <img className='w-full sm:w-70 md:w-80 h-100 sm:h-110 md:h-120 rounded-2xl object-cover' src={Img2} alt="" />
          </div>

          <div className='w-1/2 sm:w-auto'>
            <div>
              <img className='w-full sm:w-60 md:w-70 h-48 sm:h-52 md:h-57.5 mb-5 object-cover rounded-2xl' src={Img3} alt="" />
            </div>
            <div>
              <img className='w-full sm:w-60 md:w-70 h-48 sm:h-52 md:h-57.5 object-cover rounded-2xl' src={Img1} alt="" />
            </div>
          </div>
        </div>

        <div className='w-full lg:flex-1'>
          <p className='text-[#5F755F] text-lg sm:text-xl font-bold'>OUR APPROACH</p>

          <p className='text-xl sm:text-2xl font-bold text-[#173126] py-5'>
            Fitness with more room to breathe.
          </p>

          <p className='w-full sm:w-140 text-md leading-7 text-sm'>
            We believe a good training space feels capable, considered, and human. Our coaches pair practical expertise with attentive support, 
            so movement can become a lasting part of your life.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5 mt-10'>
            <div>
              <Icon icon='bi:leaf' className='text-2xl rotate-90 bg-[#CBD8C8] p-2 h-10 w-10 text-[#173126] rounded-full' />
              <p className='text-xl text-[#173126] font-bold py-3'>Sustainable</p>
              <p className='w-full sm:w-50 text-md leading-7 text-sm'>
                Progress that respects your energy and season of life.
              </p>
            </div>

            <div>
              <Icon icon='ic:outline-all-inclusive' className='text-2xl bg-[#CBD8C8] p-2 h-10 w-10 text-[#173126] rounded-full' />
              <p className='text-xl text-[#173126] font-bold py-3'>Inclusive</p>
              <p className='w-full sm:w-50 text-md leading-7 text-sm'>
                Coaching for real people, with room for every starting point.
              </p>
            </div>

            <div>
              <Icon icon='carbon:intent-request-create' className='text-2xl rotate-90 bg-[#CBD8C8] p-2 h-10 w-10 text-[#173126] rounded-full' />
              <p className='text-xl text-[#173126] font-bold py-3'>Intentional</p>
              <p className='w-full sm:w-50 text-md leading-7 text-sm'>
                Clear purpose behind every session, cue, and programme.
              </p>
            </div>
          </div>

          <div className='pt-5 leading-8 text-sm'>
            <p className='font-bold text-[#173126]'>Joseph Chinda</p>
            <p>Founder & Coach</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
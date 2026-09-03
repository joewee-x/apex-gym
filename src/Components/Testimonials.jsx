import { Icon } from '@iconify/react';

const Testimonials = () => {
  return (
    <div>
      <div className='bg-[#EFE9DD] w-full min-h-130 px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20'>
        <p className='text-[#5F755F] text-lg sm:text-xl font-bold'>WHAT MEMBERS ARE SAYING</p>

        <p className='text-xl sm:text-2xl font-bold text-[#173126] py-5'>
          Small shifts. Meaningful change.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          <div className='bg-[#FFFDF8] min-h-60 w-full lg:w-100 rounded-2xl p-6 sm:p-8 md:p-10'>
            <p>
              <Icon icon='boxicons:quote-right' className='text-3xl text-[#AFC2AE]' />
            </p>
            <p className='py-5'>
              “I came for strength training and stayed for how grounded I feel after every session.
            </p>
            <p className='font-bold text-[#173126]'>Ziggy</p>
          </div>

          <div className='bg-[#FFFDF8] min-h-60 w-full lg:w-100 rounded-2xl p-6 sm:p-8 md:p-10'>
            <p>
              <Icon icon='boxicons:quote-right' className='text-3xl text-[#AFC2AE]' />
            </p>
            <p className='py-5'>
              ““The coaching is calm, precise, and personal. I have more confidence in my body now.””
            </p>
            <p className='font-bold text-[#173126]'>Gucci</p>
          </div>

          <div className='bg-[#FFFDF8] min-h-60 w-full lg:w-100 rounded-2xl p-6 sm:p-8 md:p-10'>
            <p>
              <Icon icon='boxicons:quote-right' className='text-3xl text-[#AFC2AE]' />
            </p>
            <p className='py-5'>
              “Apex made fitness feel less like another demand and more like a place I return to everyday.”
            </p>
            <p className='font-bold text-[#173126]'>Chukwudi</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
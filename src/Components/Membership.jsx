import { Icon } from '@iconify/react';

const Membership = () => {
  return (
    <div>
      <div className='bg-[#173126] min-h-170 w-full px-5 sm:px-8 md:px-12 pt-12 sm:pt-16 md:pt-20'>
        <p className='text-[#F8F5EE] font-bold text-lg sm:text-xl'>Membership</p>

        <p className='text-[#EFF4ED] font-bold text-xl sm:text-2xl py-5'>
          Choose support that fits your life.
        </p>

        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <p className='text-[#F8F5EE] w-full lg:w-160'>
            Simple monthly options, no pressure to perform. Start where you feel comfortable and adjust when you are ready.
          </p>

          <button className="h-12 rounded-full bg-[#173126] border border-[#F8F5EE] px-5 font-bold text-[#f8f5ee] lg:px-7 w-fit">
            Book a Tour
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 lg:gap-10 xl:gap-20 py-12'>
          
          <div className='border border-[#F8F5EE] rounded-2xl h-85 md:h-80 w-full max-w-90 px-6 sm:px-8 md:px-10 py-5'>
            <p className='text-xl font-bold text-[#F8F5EE]'>Foundation</p>
            <p className='text-2xl font-bold text-[#EFF4ED] py-3'>₦ 40,000 / month</p>
            <p className='text-[#F8F5EE]'>For a steady weekly rhythm</p>

            <div className='leading-8 py-3 text-[#F8F5EE]'>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                4 group classes each month
              </p>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                Studio orientation
              </p>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                Member check-in
              </p>
            </div>

            <button className='border border-[#F8F5EE] w-full h-10 text-[#F8F5EE] cursor-pointer rounded-full'>
              choose foundation
            </button>
          </div>

          <div className='border border-[#F8F5EE] bg-white rounded-2xl h-85 md:h-80 w-full max-w-90 px-6 sm:px-8 md:px-10 py-5'>
            <p className='text-xl font-bold text-[#173126]'>Balance</p>
            <p className='text-2xl font-bold text-[#173126] py-3'>₦ 80,000 / month</p>
            <p className='text-[#173126]'>For a fuller, flexible practice.</p>

            <div className='leading-8 py-3 text-[#173126]'>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                8 group classes each month
              </p>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                1 recovery session
              </p>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                Priority workshop booking
              </p>
            </div>

            <button className='border border-[#F8F5EE] w-full h-10 text-[#F8F5EE] bg-[#173126] cursor-pointer rounded-full'>
              choose Balance
            </button>
          </div>

          <div className='border border-[#F8F5EE] rounded-2xl h-85 md:h-80 w-full max-w-90 px-6 sm:px-8 md:px-10 py-5'>
            <p className='text-xl font-bold text-[#F8F5EE]'>Restore</p>
            <p className='text-2xl font-bold text-[#EFF4ED] py-3'>₦ 100,000 / month</p>
            <p className='text-[#F8F5EE]'>For tailored, ongoing care.</p>

            <div className='leading-8 py-3 text-[#F8F5EE]'>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                Unlimited group classes
              </p>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                2 personal coaching sessions
              </p>
              <p className='flex items-center gap-2'>
                <Icon icon='ant-design:check-outlined' />
                Monthly movement review
              </p>
            </div>

            <button className='border border-[#F8F5EE] w-full h-10 text-[#F8F5EE] rounded-full cursor-pointer'>
              Restore
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Membership
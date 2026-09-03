import { Icon } from '@iconify/react';

const Practice = () => {
  return (
    <div>
      <div className="bg-[#E5E7EB] h-150 mt-15 px-10 pt-15">
        <p className="text-base font-bold text-[#5F755F] sm:text-lg lg:text-xl">
          Ways to move
        </p>
        <p className="text-2xl font-bold text-[#173126] py-5">
          Practice that meets you where you are.
        </p>
        <p className="w-140 text-[#587158] pb-10">
          A balanced weekly offering designed around capability, ease, and a
          body that feels more at home.
        </p>

        <div className='grid grid-cols-5'>
          <div className='w-60 h-75 bg-[#FFFDF8] rounded-2xl p-5'>
            <Icon icon="gg:gym" className='text-2xl text-[#65746A]' />
            <p className='text-xl font-bold pt-3 text-[#173126]'>Strength</p>
            <p className='py-5 leading-8 text-sm'>Progressive training that supports everyday power and resilience.</p>
            <p className='pb-2 font-bold text-sm text-[#173126]'>See strength sessions</p>
            <Icon icon = 'akar-icons:arrow-right' className='text-xl text-[#65746A]' />
          </div>

          <div className='w-60 h-75 bg-[#FFFDF8] rounded-2xl p-5'>
            <Icon icon="bx:run" className='text-2xl text-[#65746A]' />
            <p className='text-xl font-bold pt-3 text-[#173126]'>Mobility</p>
            <p className='py-5 leading-8 text-sm'>Intentional range, better alignment, and space to breathe.</p>
            <p className='pb-2 font-bold text-sm text-[#173126]'>See mobility sessions</p>
            <Icon icon = 'akar-icons:arrow-right' className='text-xl text-[#65746A]' />
          </div>

          <div className='w-60 h-75 bg-[#FFFDF8] rounded-2xl p-5'>
            <Icon icon="bi:heart-pulse" className='text-2xl text-[#65746A]' />
            <p className='text-xl font-bold pt-3 text-[#173126]'>Personal Training</p>
            <p className='py-5 leading-8 text-sm'>Private coaching built around your priorities, history, and pace</p>
            <p className='pb-2 font-bold text-sm text-[#173126]'>Enquire about coaching</p>
            <Icon icon = 'akar-icons:arrow-right' className='text-xl text-[#65746A]' />
          </div>

          <div className='w-60 h-75 bg-[#FFFDF8] rounded-2xl p-5'>
            <Icon icon="cuida:users-outline" className='text-2xl text-[#65746A]' />
            <p className='text-xl font-bold pt-3 text-[#173126]'>Group Classes</p>
            <p className='py-5 leading-8 text-sm'>Small, welcoming classes with clear guidance and shared energy.</p>
            <p className='pb-2 font-bold text-sm text-[#173126]'>View timetable</p>
            <Icon icon = 'akar-icons:arrow-right' className='text-xl text-[#65746A]' />
          </div>

          <div className='w-60 h-75 bg-[#FFFDF8] rounded-2xl p-5'>
            <Icon icon="reicon:recovery-convert" className='text-2xl text-[#65746A]' />
            <p className='text-xl font-bold pt-3 text-[#173126]'>Recovery</p>
            <p className='py-5 leading-8 text-sm'>Restorative sessions that help your effort settle into lasting wellbeing.</p>
            <p className='pb-2 font-bold text-sm text-[#173126]'>Discover recovery</p>
            <Icon icon = 'akar-icons:arrow-right' className='text-xl text-[#65746A]' />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Practice;

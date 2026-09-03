import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div>
        <div className='min-h-50 w-full bg-[#173126] px-5 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col sm:flex-row justify-between gap-8'>
            <div>
                <p className='font-bold text-white text-2xl'>ApexGym</p>
                <p className='text-white pt-5'>Thoughtful movement for a well-lived life.</p>
            </div>

            <div>
                <p className='font-bold text-white text-xl'>Stay Connected</p>
                <div className='text-xl pt-5 text-white flex gap-5 justify-start sm:justify-center'>
                    <Icon icon="bi:twitter-x" />
                    <Icon icon="akar-icons:instagram-fill" />
                    <Icon icon="brandico:facebook" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
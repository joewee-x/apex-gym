import React from 'react'

const Contact = ({bookingMessage, setBookingMessage}) => {
  return (
    <div id='contact'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20'>
            <div className='w-full lg:flex-1'>
                <p className="text-base font-bold text-[#5F755F] sm:text-lg lg:text-xl">
                    Visit Apex
                </p>

                <p className="text-xl sm:text-2xl font-bold text-[#173126] py-5">
                    Let’s make space for your next step.
                </p>

                <p className='w-full sm:w-100'>
                    Book a tour, ask a question, or tell us what you would like more support with.
                </p>

                <p className='font-bold text-xl pb-2 pt-5 text-[#173126]'>Location</p>
                <p>Zarmaganda Jos</p>

                <p className='font-bold text-xl pb-2 pt-5 text-[#173126]'>Opening Hours</p>
                <p>Mon–Fri 06:30–20:30 · Sat–Sun 08:00–16:00</p>

                <p className='font-bold text-xl pb-2 pt-5 text-[#173126]'>Reach Us</p>
                <p>Joe@gmail.com or 08130700820</p>
            </div>

            <div className='bg-white w-full lg:w-160 p-6 sm:p-8 md:p-10 rounded-2xl min-h-125 shadow-xl border border-[#CFD8CC]'>
                <p className="text-xl sm:text-2xl font-bold text-[#173126]">
                    Start a conservation
                </p>

                <p className='py-5'>
                    We will reply with thoughtful next steps within two working days.
                </p>

                <div>
                    <form action="">
                        <div className='flex flex-col sm:flex-row sm:justify-between gap-5'>
                            <div className='flex flex-col w-full'>
                                <label className='font-bold pb-3 text-[#173126]' htmlFor="">
                                    Your Name
                                </label>
                                <input 
                                    className='border h-12 border-[#CFD8CC] rounded-2xl w-full sm:w-68' 
                                    type="text" 
                                />
                            </div>

                            <div className='flex flex-col w-full'>
                                <label className='font-bold pb-3 text-[#173126]' htmlFor="">
                                    Email Adress
                                </label>
                                <input 
                                    className='border h-12 border-[#CFD8CC] rounded-2xl w-full sm:w-68' 
                                    type="email" 
                                />
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-col py-5'>
                                <label className='font-bold pb-3 text-[#173126]' htmlFor="">
                                    How can we help?
                                </label>
                                <textarea 
                                    className='border border-[#CFD8CC] h-30 rounded-2xl w-ful p-5' 
                                    name="" 
                                    id=""
                                    value={bookingMessage}
                                    onChange={(e) => setBookingMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <button className="h-12 w-full rounded-full bg-[#173126] px-5 font-bold text-[#f8f5ee] sm:w-auto lg:px-7">
                            Send enquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
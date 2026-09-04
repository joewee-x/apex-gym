import React from 'react'
import { useState } from 'react'
import ScheduleTable from './ScheduleTable'

const WeeklyRythm = ({onBook}) => {

    const [classActiveButton, setClassActiveButton] = useState("All")
    const [intensityActiveButton, setIntensityActiveButton] = useState("All")

  return (
    <div id='schedule'>
      <div>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 px-5 sm:px-8 md:px-12 my-15 sm:my-20'>

            <div>
                <p className='text-[#5F755F] text-lg sm:text-xl font-bold'>WEEKLY RYTHM</p>

                <p className='text-xl sm:text-2xl font-bold text-[#173126] py-5'>
                    Find a session that feels right.
                </p>

                <p className='w-full sm:w-130 text-md leading-7 text-sm'>
                    Our weekly timetable is intentionally light on noise and full of options for moving well.
                </p>
            </div>

            <div className='w-full lg:w-auto'>

                <div>
                    <p className='font-bold pb-3 text-[#5F755F]'> CLASS TYPE</p>

                    <div className='flex flex-wrap gap-2'>
                        <button onClick={()=> setClassActiveButton("All")} 
                            className={`px-5 rounded-full h-10 ${classActiveButton === "All" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#F8F5EE] text-[#173126] border border-[#173126]'}`}>
                            All
                        </button>

                        <button onClick = {()=> setClassActiveButton("Mobility")} 
                            className={`rounded-full px-5 h-10 ${classActiveButton === "Mobility" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#f8f5ee] text-[#173126] border border-[#173126]'}`}>
                            Mobility
                        </button>

                        <button onClick = {()=> setClassActiveButton("Strength")} 
                            className={`rounded-full px-5 h-10 ${classActiveButton === "Strength" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#f8f5ee] text-[#173126] border border-[#173126]'}`}>
                            Strength
                        </button>

                        <button onClick = {()=> setClassActiveButton("Recovery")} 
                            className={`rounded-full px-5 h-10 ${classActiveButton === "Recovery" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#f8f5ee] text-[#173126] border border-[#173126]'}`}>
                            Recovery
                        </button>
                    </div>
                </div>

                <div className='pt-5'>
                    <p className='font-bold pb-3 text-[#5F755F]'> Intensity</p>

                    <div className='flex flex-wrap gap-2'>
                        <button onClick={()=> setIntensityActiveButton("All")} 
                            className={`px-5 rounded-full h-10 ${intensityActiveButton === "All" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#F8F5EE] text-[#173126] border border-[#173126]'}`}>
                            All
                        </button>

                        <button onClick = {()=> setIntensityActiveButton("Gentle")} 
                            className={`rounded-full px-5 h-10 ${intensityActiveButton === "Gentle" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#f8f5ee] text-[#173126] border border-[#173126]'}`}>
                            Gentle
                        </button>

                        <button onClick = {()=> setIntensityActiveButton("Steady")} 
                            className={`rounded-full px-5 h-10 ${intensityActiveButton === "Steady" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#f8f5ee] text-[#173126] border border-[#173126]'}`}>
                            Steady
                        </button>

                        <button onClick = {()=> setIntensityActiveButton("Energising")} 
                            className={`rounded-full px-5 h-10 ${intensityActiveButton === "Energising" ? 'bg-[#173126] text-[#F8F5EE]' : 'bg-[#f8f5ee] text-[#173126] border border-[#173126]'}`}>
                            Energising
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <ScheduleTable 
            classActiveButton={classActiveButton} 
            intensityActiveButton={intensityActiveButton} 
            onBook = {onBook}
        />

      </div>
    </div>
  )
}

export default WeeklyRythm
import React from 'react'

const ScheduleTable = ({intensityActiveButton, classActiveButton, onBook}) => {
    const classes = [
        {
            day: "Monday",
            name: "Morning Mobility",
            description: "Lengthen & reset",
            time: "07:00 — 9:00",
            intensity: "Gentle",
            type : 'Mobility'
        },
        {
            day: "Tuesday",
            name: "Grounded Strength",
            description: "Build useful capacity",
            time: "7:00 — 10:00",
            intensity: "Steady",
            type : 'Strength'
        },
        {
            day: "Wednesday",
            name: "Restore Flow",
            description: "Breath, release, recover",
            time: "11:30 — 1:15",
            intensity: "Gentle",
            type : 'Recovery'
        },
        {
            day: "Saturday",
            name: "Studio Circuit",
            description: "A supportive full-body session",
            time: "09:00 — 10:00",
            intensity: "Energising",
            type : 'Studio'
        }
    ];

    const filterClasses = classes.filter(item => {
        const classType = classActiveButton === 'All' || item.type === classActiveButton;
        const intensity = intensityActiveButton === 'All' || item.intensity === intensityActiveButton;

        return classType && intensity
    })


  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-12 overflow-x-auto mb-20'>
            <table className='w-full min-w-200 border-collapse rounded-2xl border border-[#d9ddd4]'> 
                <thead className='text-center bg-[#eef2eb] h-15'>
                    <tr className='text-left pr-2 border-b border-[#d9ddd4]'>
                        <th className='px-5'>Day</th>
                        <th>Class</th>
                        <th>Time</th>
                        <th>Intensity</th>
                        <th> </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        filterClasses.map(class1 => (
                            <tr key={class1.day} className='border-b border-[#d9ddd4]'>
                                <td className='py-8 px-5'>
                                    <p>{class1.day}</p>
                                </td>
                                <td>
                                    <p>{class1.name}</p>
                                    <p className='text-[12px] pt-2 text-[#587158]'> {class1.description}</p>
                                </td>
                                <td>
                                    <p>{class1.time}</p>
                                </td>
                                <td>
                                    <p>{class1.intensity}</p>
                                </td>
                                <td>
                                    <button className='rounded-full border h-10 w-20 cursor-pointer' onClick={()=>onBook(class1.name)}>Book</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>

            </table>
      </div>
    </div>
  )
}

export default ScheduleTable
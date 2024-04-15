import React from 'react'

type Props = {
  ipAddress: string
  location: string
  timezone: string
  isp: string
}

export default function Details(props: Props) {

  const stats = [["IP Address", props.ipAddress], ["Location", props.location], ["Timezone", props.timezone], ["ISP", props.isp]]

  function detail (title: string, value: string, index: number ){
    return(
      <div className='md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center p-2 text-justify' key={index}>
        <p className='text-sm text-slate-400 font-semibold'>{title}</p>
        <p className=' text-black font-bold'>{value}</p>
      </div>
    )
  }
  return (
    <div className='w-4/5 rounded-lg absolute top-[200px] bg-white z-[3] flex flex-col md:flex-row container p-4 md:p-8'>
      {stats.map((x, index)=> detail(x[0], x[1], index))}
    </div>
  )
}
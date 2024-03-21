import React from 'react'
interface propsType{
    icon:React.ReactNode,
    title:string,
    desc:string
}
const FeaturedCard = ({icon,title,desc}:propsType) => {
  return (
    <div className='flex items-center gap-2 bg-gray-100 px-4 py-6'>
        {icon}
        <div>
            <h2 className='font-medium text-xl'>{title}</h2>
            <p className="text-gray-600">{desc}</p>
        </div>
    </div>
  )
}

export default FeaturedCard
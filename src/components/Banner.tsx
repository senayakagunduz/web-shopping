

const Banner = () => {
  return (
    <div className='container mt-32 w-full'>
        <div className="flex items-center justify-center w-full">
            <div className='h-[200px] md:h-[260px] banner2 bg-cover bg-center w-full rounded-xl p-8 md:p-16'>
                <p className="text-white text-xl font-medium">SmartPhone Pro 2024</p>
                <a href="#" className='mt-6 bg-sky-500 text-white w-[120px] h-[40px] flex items-center justify-center rounded-md hover:text-sky-500 hover:bg-white transition-all duration-200 font-medium'>Shop Now</a>
            </div>
        </div>
    </div>
  )
}

export default Banner
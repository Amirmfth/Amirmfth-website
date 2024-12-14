import React from 'react'

function Hero() {
  return (
<section className="container flex flex-col mx-auto  space-y-5  md:flex-row  md:space-x-20">
    {/* Name & profile Image */}
<div className="flex flex-col py-4 space-y-2 md:space-y-4">
    {/* Profile Image */}
    <img src="" alt="" className="x-10 h-10 rounded-full" />
    {/* Name */}
    <h1 className="text-3xl font-semibold text-left md:text-6xl">Hello! I'm Amir.M.Fatahi</h1>
</div>
<div className="flex flex-col py-2 space-y-8">
    <h2 className="text-2xl text-left md:text-5xl">A Website Developer based in Iran, Tehran.</h2>
    <p className="text-gray-500 text-lg">Passionate creating SPA and fully functional websites</p>
    <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-black rounded-lg hover:opacity-70 hover:scale-105 dark:bg-white dark:text-black ">Talk with me</button>
        <button className="px-4 py-2 border border-black rounded-lg hover:opacity-70 hover:scale-105 dark:bg-black dark:text-white dark:border-white "><a href="#">See my work</a></button>
    </div>
</div>
</section>
  )
}

export default Hero

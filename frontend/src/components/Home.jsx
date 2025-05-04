import React from 'react'

const Home = () => {
  return (
    <div>
        <section className='min-h-[700px] max-w-6xl mx-auto grid place-content-center text-white'>
            <div className='flex flex-col items-center'>
                <img src="https://img.freepik.com/free-photo/medium-shot-jesus-christ-with-laptop_23-2150972089.jpg?uid=R111781453&ga=GA1.1.688553247.1746132032&semt=ais_hybrid&w=740"alt="" className='h-20' />
                <span className='leading-none border border-gray-600 rounded px-3 py-1 text-sm text-natural-200 bg-slate-950 flex items-center gap-2'>
                    <div className='w-[10px] h-[10px] bg-green-500 rounded-full'></div>
                    Avilable for new projects
                </span>
            </div>
            <div className='text-center my-5 space-y-3'>
              <h1 className='text-5xl font-bold bg-gradient-to-t from-green-700 to-green-50 bg-clip-text text-transparent'>Building Exceptional
              <br />User Experiences</h1>
          

            <p className='max-w-md text-neutral-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sint porro itaque neque, rerum iste fugiat ipsam omnis et assumenda ad similique possimus consequuntur quas voluptas cum
            </p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <button className='px-4 py-2 border rounded-lg border-neutral-500 text-nutral-200'>Explore my work</button>
              <button className='px-4 py-2 rounded-lg bg-neutral-200 text-black'>🙋‍♂️ Let's connect</button>
            </div>
        </section>
    </div>
  )
}

export default Home
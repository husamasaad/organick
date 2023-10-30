import Image from 'next/image'
import React from 'react'

const EcoFriendly = () => {
  return (
    <section className='paddings flex items-center justify-end relative bg-[#F1F8F4]'>
      <Image 
        src="/eco.jpg"
        alt="Eco Friendly"
        width={952}
        height={931}
        className='absolute top-0 left-0 lg:left-20 h-full'
      />
      <div className='bg-white rounded-[30px] p-6 lg:p-[30px] relative z-10 max-w-4xl shadow-lg'>
        <span className="subtitle text-secondary  block z-40 relative">Eco Friendly</span>
        <h2 className='heading-3 !leading-[45px] text-primary block z-40 relative mb-12'>
          Econis is a Friendly
          Organic Store
        </h2>

        <h4 className='heading-6 text-primary'>Start with Our Company First</h4>
        <p className='paragraph mt-6 text-body-text mb-12'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h4 className='heading-6 text-primary'>Learn How to Grow Yourself</h4>
        <p className='paragraph mt-6 text-body-text mb-12'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h4 className='heading-6 text-primary'>Farming Strategies of Today</h4>
        <p className='paragraph mt-6 text-body-text mb-12'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>

      </div>
    </section>
  )
}

export default EcoFriendly
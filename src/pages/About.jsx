import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="capitalize text-4xl font-bold leading-none sm:text-6xl tracking-tight">
          Designed for
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="capitalize stat-title text-primary-content text-4xl font-bold tracking-tight">
              your life
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-xl leading-relaxed max-w-3xl mx-auto px-4">
        <p className="mb-6 ">
          At Tracy Store, we believe furniture should inspire and enhance the
          way you live. Our curated collection blends style, comfort, and
          quality, bringing timeless designs that fit any home or office. From
          modern classics to functional essentials, every piece is handpicked
          for its durability and beauty.
        </p>
        <p>
          We&apos;re here to make your space feel like home with affordable,
          high-quality furniture and exceptional customer care. Discover your
          perfect pieces and let us help you transform your space.
        </p>
      </div>
    </>
  )
}

export default About

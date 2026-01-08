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
          Part of the NomadLiving Ecosystem. Sustainably sourced, designed for comfort.
        </p>
        <p>
          Every piece in our collection has been carefully selected from our luxury glamping stays. Experience these looks at our stays, then bring the wilderness home. From handcrafted furniture to premium textiles, each item tells a story of curated living inspired by nature.
        </p>
      </div>
    </>
  )
}

export default About

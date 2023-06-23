import React from 'react'
import Hero from '../components/Hero'
import AllProduct from '../components/AllProduct'
import Filters from '../components/Filters'
const Products = () => {
  return (
    <main>
      <Hero location={'/products'} />
      <section className='page grid grid-cols-[1fr] md:grid-cols-[200px,2fr] gap-10 section section-center'>
          <Filters />
          <AllProduct />
      </section>
    </main>
  )
}

export default Products

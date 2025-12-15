import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import { FormInput, FormSelect, FormRange, FormCheckbox } from './index'

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, order, price } = params

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* 1.search input */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
        size="input-sm"
      />
      {/* 2. select catagory */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      {/* 3. select company */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      {/* 4. select order */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size="select-sm"
      />
      {/* 5. range price */}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        defaultValue={price}
      />
      {/* 6. checkbox shipping */}
      <FormCheckbox label="free shipping" name="shipping" size="checkbox-sm" />

      {/* 7. button  */}
      <button 
        type="submit" 
        className="btn btn-primary btn-sm"
        aria-label="Apply filters and search products"
      >
        search
      </button>
      {/* 8. link */}
      <Link 
        to="/products" 
        className="btn btn-accent btn-sm"
        aria-label="Reset all filters"
      >
        reset
      </Link>
    </Form>
  )
}

export default Filters

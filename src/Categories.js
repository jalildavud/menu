import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className='space-x-5 mt-5 text-yellow-600 font-medium text-md'>
        {categories.map((category, index) => {
           return (
           <button className='capitalize rounded-sm px-2
            hover:bg-yellow-600 hover:text-white' type='button' 
            key={index} onClick={()=>filterItems(category)}>
           {category}
           </button>
        )})}
    </div>
  )
}

export default Categories

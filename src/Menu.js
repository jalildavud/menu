import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='grid md:grid-cols-2 mx-auto max-w-5xl'>
        {items.map((menuItem) => {
            const {id, title, img, desc, price} = menuItem;
            return <article key={id} className=" flex flex-row space-x-8 m-8 px-4 max-auto align-baseline">
                <img src={img} alt='' className='flex w-40 h-40 border-4 border-yellow-600 '/>
                <div className=''>
                    <header className='flex flex-row justify-between '>
                        <h4 className='flex capitalize font-medium'>{title}</h4>
                        <h4 className='flex text-yellow-600 font-medium'>{price}</h4>
                    </header>
                    <p className='mt-3'>{desc}</p>
                </div>

            </article>
        })}
    </div>
  )
}

export default Menu

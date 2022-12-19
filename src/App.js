import React, {useState} from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems =(category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className='flex flex-col items-center'>
        <div className='flex '>
          <h2 className='mt-10 text-3xl font-bold'>Our Menu</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;

import React from 'react';
import list from '../data';
import '../styles/itemlist.css';
import Cards from './Cards';

function ItemsList({handleClick}) {
  return (
    <section>
        {
            list.map(item => 
                <Cards item={item} key={item.id} handleClick={handleClick}/>
            )
        }
    </section>
  )
}

export default ItemsList
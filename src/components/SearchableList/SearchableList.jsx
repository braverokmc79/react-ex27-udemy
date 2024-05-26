import { useState } from "react";

export default function SearchableList({ items, itemKeyFn,  children}) {

  const [searchTerm, setSearchTerm] =useState('');

  const searchResults=items.filter(item=>{
   if(JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()) ){
        return item;  
    } 
 }); 

  function handleChange(event){
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="검색" onChange={handleChange} />

      <ul>
        {searchResults&& searchResults.map((item, index) => (
          <li key={itemKeyFn(item)}>
                {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );


}

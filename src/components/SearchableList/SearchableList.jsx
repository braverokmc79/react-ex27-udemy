import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn,  children}) {

  const [searchTerm, setSearchTerm] =useState('');

  const lastChange=useRef();

  const searchResults=items.filter(item=>{
   if(JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()) ){
        return item;  
    } 
 }); 

  function handleChange(event){
    const newSearchTerm = event.target.value;

    // 기존 타이머를 제거합니다.
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    // 새로운 타이머를 설정합니다.
    lastChange.current = setTimeout(() => {
      setSearchTerm(newSearchTerm);
      lastChange.current = null; // 타이머 만료 후 타이머 id를 초기화합니다.
    }, 500);    
  }

  

  return (
    <div className="searchable-list">
      <input type="search" placeholder="검색" onChange={handleChange}   />

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

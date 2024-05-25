import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext(){
    const ctx=useContext(AccordionContext);

    if(!ctx){
        throw new Error("아코디언 관련 컴포넌트는 <Accordion>으로 래핑되어야 합니다.");
    }

    return ctx;
}


export default function Accordion({ children, className }) {

  const [openItemId, setOpenItemId]  =useState();


  function toggleItem(id){
    
    setOpenItemId(prevId=>{
        console.log(" toggleItem :",id, prevId===id);
        return    prevId===id? null:id
    });
  }



  const contextValue={
    toggleItem,
    openItemId,
  }


  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}


 Accordion.Item=AccordionItem;
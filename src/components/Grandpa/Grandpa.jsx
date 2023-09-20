import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";


export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney]= useState(1000)

  const asset = 'diamond';
  return (
   <div className="border-2 border-solid border-red-400 rounded-lg m-2 p-5">
      <h2 className="text-3xl font-bold ">This is Grandpa</h2>
      <p>Net Money: {money}</p>
    <MoneyContext.Provider value={[money,setMoney]}>
      <AssetContext.Provider value="gold">
        <div className="flex justify-center ">    
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
          
        </div>
      </AssetContext.Provider>
    </MoneyContext.Provider>
   </div>
  );
};

export default Grandpa;

/*
1. Create a context and export it.
2. Add provider for the context with value.
3. UseContext to access value in the context api


*/
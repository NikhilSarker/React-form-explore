import { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {

  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border-2 border-solid border-red-400 rounded-lg m-2 p-5">
      <h2>Aunty</h2>
      <div className="flex">
     <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
        <Cousine name={'jasmine'}></Cousine>
        

      </section>
      <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
        <Cousine name={'josef'}></Cousine>
        

      </section>
     </div>

     <section>
      <p>Money: {money}</p>
      <button className="btn btn-accent" onClick={()=>setMoney(money + 1000)}>Add 1000 taka</button>

     </section>
      
    </div>
  );
};

export default Aunty;
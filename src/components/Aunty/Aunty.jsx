import Cousine from "../Cousine/Cousine";


const Aunty = () => {
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
      
    </div>
  );
};

export default Aunty;
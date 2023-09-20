import Cousine from "../Cousine/Cousine";


const Uncle = () => {
  return (
    <div className="border-2 border-solid border-red-400 rounded-lg m-2 p-5">
      <h2>Uncle</h2>
     <div className="flex">
     <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
        <Cousine name={'kalam'}></Cousine>
        

      </section>
      <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
        <Cousine name={'Kali'}></Cousine>
        

      </section>
     </div>
      
    </div>
  );
};

export default Uncle;
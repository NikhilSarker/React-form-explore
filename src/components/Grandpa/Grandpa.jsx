import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";


const Grandpa = () => {
  return (
   <div className="border-2 border-solid border-red-400 rounded-lg m-2 p-5">
      <h2 className="text-3xl font-bold ">This is Grandpa</h2>
     <div className="flex justify-center ">    
      <Dad></Dad>
      <Uncle></Uncle>
      <Aunty></Aunty>
      
    </div>
   </div>
  );
};

export default Grandpa;
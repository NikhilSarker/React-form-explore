import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

import PropTypes from 'prop-types';
const Dad = ({asset}) => {
  return (
    <div className="border-2 border-solid border-red-400 rounded-lg m-2 p-5">
      <h2>Dad</h2>
      <div className="flex">
     <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
        
     <Myself asset={asset}></Myself>

      </section>
      <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
       
      <Brother></Brother>

      </section>
      <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
       
      <Sister></Sister>

      </section>
     </div>
      
      
    </div>
  );
};
Dad.propTypes = {
  asset:PropTypes.string

}
export default Dad;
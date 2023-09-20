import Special from "../Special/Special";
import PropTypes from 'prop-types';

const Myself = ({asset}) => {
  return (
    <div>
      <h2>Myself</h2>
      <div className="flex">
     <section className=" border-2 border-solid border-red-400 rounded-lg m-2 p-5">
        <Special asset={asset}></Special>       

      </section>
     </div>
      
    </div>
  );
};
Myself.propTypes = {
  asset:PropTypes.string

}
export default Myself;
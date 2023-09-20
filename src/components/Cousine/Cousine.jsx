
import PropTypes from 'prop-types';
const Cousine = ({name}) => {
  return (
    <div>
      <h2>Cousine</h2>
      <p>{name}</p>
      
    </div>
  );
};
Cousine.propTypes = {
  name:PropTypes.string

}
export default Cousine;
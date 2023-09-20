import PropTypes from 'prop-types';

const ReuseableForm = ({ handleSubmit, btnText='Submit', children}) => {
  console.log(typeof children);

  const handleLocalSubmit = (e)=>{
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    }
    handleSubmit(data);
  }

  return (
    <div>
      {/* <h2 className="text-center text-3xl font-bold mb-4">{formTitle}</h2> */}
      <h2 className="text-center text-3xl font-bold mb-4">{children}</h2>
      <form onSubmit={handleLocalSubmit}>
       
       <input
         name="name"
         type="text"
         placeholder="Name"
         className="input input-bordered w-full max-w-xs"
       />
       <br />
       <input
         name="email"
         type="email"
         placeholder="Email"
         className="input input-bordered w-full max-w-xs my-4"
       />
       <br />
       <input type="submit" value={btnText} className="btn btn-accent" />
     </form>
      
    </div>
  );
};
ReuseableForm.propTypes = {
  // formTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.obj,
  btnText: PropTypes.string,

}
export default ReuseableForm;
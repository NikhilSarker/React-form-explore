import useInputState from "../../hooks/useInputState";


const HookForm = () => {
  // const [name, handleNameChange]= useInputState('kim')
  const emailState = useInputState('kim@gmail.com')

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(emailState.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       
       {/* <input
         value={name}
         onChange={handleNameChange}
         name="name"
         type="text"
         placeholder="Name"
         className="input input-bordered w-full max-w-xs"
       /> */}
       <br />
       <input
         {...emailState}
         name="email"
         type="email"
         placeholder="Email"
         className="input input-bordered w-full max-w-xs my-4"
       />
       <br />
       <input
         name="password"
         type="password"
         placeholder="password"
         className="input input-bordered w-full max-w-xs my-4"
       />
       <br />
       <input type="submit" value="Submit" className="btn btn-accent" />
     </form>
      
    </div>
  );
};

export default HookForm;
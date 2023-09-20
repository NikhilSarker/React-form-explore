import { useState } from "react";


const StateForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (password.length < 5) {
      setError('Password at least 5 character long!');
      
    }else{
      setError('');

    }

  }
  const handleNameChange = (e)=>{
    setName(e.target.value);
    

  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value);
    

  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
    

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       
       <input
         onChange={handleNameChange}
         name="name"
         type="text"
         placeholder="Name"
         value={name}
         className="input input-bordered w-full max-w-xs"
       />
       <br />
       <input
         onChange={handleEmailChange}
         name="email"
         type="email"
         placeholder="Email"
         value={email}
         className="input input-bordered w-full max-w-xs my-4"
       />
       <br />
       <input
         onChange={handlePasswordChange}
         name="password"
         type="password"
         placeholder="Password"
         value={password}
         className="input input-bordered w-full max-w-xs my-4"
       />
       <br />
       <input type="submit" value="Submit" className="btn btn-accent" />

       {
        error && <p>{error}</p>
       }
     </form>
      
    </div>
  );
};

export default StateForm;
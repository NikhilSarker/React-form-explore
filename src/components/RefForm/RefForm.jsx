import { useEffect, useRef } from "react";


const RefForm = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(()=>{
    nameRef.current.focus();

  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       
       <input
         ref={nameRef}
         name="name"
         type="text"
         placeholder="Name"
         className="input input-bordered w-full max-w-xs"
       />
       <br />
       <input
         ref={emailRef}
         name="email"
         type="email"
         placeholder="Email"
         className="input input-bordered w-full max-w-xs my-4"
       />
       <br />
       <input
         ref={passwordRef}
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

export default RefForm;
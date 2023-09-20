const Form = () => {


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       
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
        <input type="submit" value="Submit" className="btn btn-accent" />
      </form>
    </div>
  );
};

export default Form;

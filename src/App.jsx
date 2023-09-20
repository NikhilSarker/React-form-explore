
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
// import ReuseableForm from './components/ReuseableForm/ReuseableForm';
// import HookForm from './components/HookForm/HookForm';
// import RefForm from './components/RefForm/RefForm';
// import StateForm from './components/StateForm/StateForm';
// import Form from './components/Form/Form';

function App() {

  //   const handleSignUp = (data)=>{
  //   console.log('sign up', data);
  // }
  //   const handleUpdate = (data)=>{
  //     console.log('Update', data);
  // }

  return (
    <>
      <h1 className='py-5 text-5xl font-bold'>React Form</h1>
      <Grandpa></Grandpa>




      {/* <Form></Form> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUp}
      >
        <div>
          <h3>Sign up</h3>
          <p>Please sign up </p>
        </div>
      </ReuseableForm>
      <ReuseableForm 
      formTitle={'Profile Update'} 
      btnText='Update' 
      handleSubmit={handleUpdate}>
        <div>
          <h3>Update profile</h3>
          <p>Please update your profile </p>
        </div>
      </ReuseableForm> */}

    </>
  )
}

export default App

import React, { useState } from 'react'
import firebase from './firebaseConfig';


function Submit(e) {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    const submit = async(e) =>
    {
        e.preventDefault();
        try{
            const user = await firebase.auth().createUserWithEmailAndPassword(email,pass)
            if(user)
            {
                alert("Account Created successfully")
            }
        }
        catch(error)
        {
            alert(error)
        }
    }
  return (
    <div class='container py-5'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className="col-md-4" >
          <div
          className="card shadow-lg bg-white"
          style={{ height: "43rem", borderRadius: 50 }}
          >
          <div className="container">
        <form>
          <div className="row text-center p-3 mb-5">
            <h6 className="my-3">Sign up</h6>
          </div>
          <div className="" style={{ marginTop: "50%" }}>
            <div className="form-group mb-4">
              <label />
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName (e.target.value)}
              />
              <label />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label />
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="col mb-3 ">
              <button onClick={submit}
                type="button"
                className="btn btn-warning rounded-pill w-100"
              >
                Sign up
              </button>
            </div>
            <p className="">
              already remember?
              <a href="http://localhost:3000/signin" className="text-warning">
                Sign in
              </a>
            </p>
          </div>
        </form>
          </div>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default Submit
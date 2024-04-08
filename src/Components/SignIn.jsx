import React, { useState } from 'react'
import firebase from './firebaseConfig';


function  Submit(e) {

    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    const submit = async(e) =>
    {
        e.preventDefault();
        try{
            const user = await firebase.auth().signInWithEmailAndPassword(email,pass)
            if(user)
            {
                alert("Login successfully")
            }
        }
        catch(error)
        {
            alert(error)
        }
    }
  return (
    <div class='container py-5'>
      <div class="row">
          <div className='col-md-4'></div>
          <div className=" col-md-4">
        <div
          className="card shadow-lg bg-white"
          style={{ height: "43rem", borderRadius: 50 }}
        >
          <div className="container">
            <form>
              <div className="row text-center p-3 mb-5">
                <h6 className="my-3">Sign in</h6>
              </div>
              <div className="" style={{ marginTop: "30%" }}>
                <div className="form-group mb-3">
                  <label />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
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
                <p className="offset-8">
                  {" "}
                  <a href="#" className="text-warning">
                    Forget Password
                  </a>
                </p>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember Me
                  </label>
                </div>
                <div className="col mb-2">
                  <button onClick={submit}
                    type="button"
                    className="btn btn-warning rounded-pill w-100"
                  >
                    Sign up
                  </button>
                </div>
                <p className="text-center">or</p>
                <div className="row m-1">
                  <button
                    type="button"
                    className="btn  w-50 rounded-pill text-white"
                    style={{ backgroundColor: "#3b5998" }}
                  >
                    Facebook
                  </button>
                  <button type="button" className="btn btn-primary w-50 rounded-pill">
                    Twitter
                  </button>
                </div>
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
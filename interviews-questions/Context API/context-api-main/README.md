## Context API 
##### [ context API jada component prr use kiye dekhna hai toh "Food_App" ka project check krr le ]
### Context API :
- parent -> App.js , 
- child -> ChildA , ChildB , ChildC
- parent [App.js] se child [ChildC] me data bhejna hai.
--------
- createContext() , provider , useContext
- import : 
   - import React,{createContext} from 'react';
- call kiye :
   - const context = createContext()
   - createContext() --> me default "data" bhi de sakte hai
- jaha-2 use karna chahate ho "wrapper" bana lo :
   - mai chahta hu pure k pure "app.js" me jitne "component" hai , har jagah "data" ko transfer kar paye
     ```js
      <context.Provider value={color}>
        <>
          <h1>app comp</h1>
          <Child />
        </>
      </context.Provider>  
     ```
    - eg :
     ```js
        App.js
        -----------

            import './App.css';
            import Child from './components/Child';
            import React, { createContext ,useState } from 'react';
            const context = createContext()

            function App() {
            const [color,setColor] = useState('yellow')
            return (
                <context.Provider value={color}>
                <>
                    <h1>app comp</h1>
                    <Child />
                </>
                </context.Provider>
            );
            }

            export default App;


     ```

#### App.js
```js
import './App.css';
import Child from './components/Child';
import React, { createContext ,useState } from 'react';
// export kiye global state "context" ko
export const context = createContext()

function App() {
  const [color,setColor] = useState('yellow')
  return (
    <context.Provider value={color}>
      <>
        <h1>app comp</h1>
        <Child />
      </>
    </context.Provider>
  );
}

export default App;

```
#### Child.js
- "App.js" se data hmne bheja , toh hmm uss data ko "Child" me kaise access karegen
  - jab bhi aap child component me jaoge aap ko import karna hai Hook --> uss hook ka nam hai "useContext" 
  - Import :
     -  import React, { useContext } from 'react' 
  - "useContext" aapke "component" k ander hi use hoga 
  - useContext --> ke through hmm "global store" se "value" mangate hai
```js
import React, { useContext } from 'react'
import { context } from '../App'

function Child() {
    // useContext me "global state --> context" pass kiye 
    const appColor = useContext(context)
    return (
        <>
            <h1 style={{ color: appColor }}>child components</h1>
        </>
    )
}

export default Child

```

## Food_App with Context API :
#### create , provider , useContext
   - AuthProvider.js --> App.js --> Signup.js , Login.js 
#### Food_App with Context API :
- components --> context --> "AuthProvider"
```js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
    return useContext(AuthContext)
}
// sync -> if you have a user or not , on login and logout 
// It also exposes you lossley coupled auth functions
// 
function AuthProvider({ children }) {
    // const history = useHistory();
    const [user, userSet] = useState("");  // user set hota hai
    const [loading, setLoading] = useState(false); 
    
    async function signUp(name, password, email, confirm) {
        try {
            setLoading(true)
            console.log("signup will be here");
            let res = await axios.post
                ("/api/v1/auth/signup", {
                    name: name,
                    password: password,
                    confirmPassword: confirm,
                    email
                })
            if(res.status == 400){
                alert("improper user data entry")
               
            }
            setLoading(false)
            console.log("data", res.data);

        } catch (err) {
            console.log("err", err.message);
            setLoading(false)
        }
    }
   
    async function login(email, password) {
        // return status
        let flag = true

        try {
            setLoading(true);
            const res = await axios.post("/api/v1/auth/login", {
                email: email,
                password: password
            });
            
            // checks
            if(res.status == 404){
                alert("Password or Email may be wrong")
                flag = false
            }else if(res.status == 400){
                alert("user not found kindly login")
                flag = false
            }else if(res.status == 500){
                alert("Internal server error")
                flag = false
            }else{
                userSet(res.data.user);
            }
            setLoading(false);
           console.log("rtgrwtyw",res.data)
           return flag;
        }
        catch (err) {
            flag = false
            console.log(err.message);
            alert("Password or email may be wrong");
            setLoading(false); // error aaya toh
            return flag
        }
        console.log("login will be here");
    }
    
    function logout() {
        // localStorage.removeItem("user")
        // userSet(null);
        console.log("logout will come here");
    }

    const value = {
        user,
        login,
        signUp,
        logout
    }
    return (
        < AuthContext.Provider value={value} >
            {/* if not loading show childrens -> agar loding nhi ho rahi toh "children" dikha do */}
            {!loading && children}    
        </AuthContext.Provider >
    )
}
export default AuthProvider

```
- App.js
```js
import React from 'react';
import Signup from './Components/Login Page/Signup';
import Home from './Components/Home Page/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/Home Page/NavBar';
import Footer from './Components/Home Page/Footer';
import Login from './Components/Login Page/Login';
import ForgetPassword from './Components/Login Page/ForgetPassword';
import AllPlans from './Components/Plan Page/AllPlans';
import AuthProvider from './Components/Context/AuthProvider';
import Profile from './Components/Profile Page/Profile';
import PlanDetail from './Components/PlanDetail Page/PlanDetail';
function App() {
  return (
    <Router>
      {/* AuthProvider : is providing the data that is your user logged in or not */}
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profilePage">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgetPassword">
            <ForgetPassword />
          </Route>

          <Route path="/allPlans">
            <AllPlans />
          </Route>
          <Route path="/planDetail/:id">
            <PlanDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}
export default App;

```
- components --> "login.js"
```js
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Styles/login.css'

function Login() {

    const history = useHistory();
    const [password, passwordSet] = useState("")
    const [email, emailSet] = useState("");
    const [loading, setLoading] = useState(false);
    const {login, user} = useContext(AuthContext);



    const handleLogin = async () => {
        try {
            console.log(email,password)
           let flag = await login(email, password)
           console.log("flag",flag)
           if(flag){
             history.push("/")
           }
          } catch(err) {
            console.log(err.message);
          }
    }

    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>LOGIN</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button"  onClick={handleLogin}>
                        Login
                    </button>
                    <div className='otherOption'>
                        <button className=" otherbtns form-button" type="submit" >
                            <Link to="/signup" className="otherbtns">Sign Up</Link>
                        </button>
                        <button className=" otherbtns form-button" type="submit">
                            <Link to="/forgetPassword" className="otherbtns">Forget Password</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

```
- components --> "signup"
```js
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/login.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

function Signup(props) {
    // react-router-dom
    const history = useHistory();
    const { signUp } = useAuth()
    const [name, nameSet] = useState("");
    const [password, passwordSet] = useState("");
    const [email, emailSet] = useState("");
    const [confirm, setConfirm] = useState("");
    
    const handleSignup = async () => {
        try {
            console.log("sending request");
            // do signup
            await signUp(name, password, email, confirm);
            
            // send user to login 
            history.push("/login");
        }
        catch (err) {
            console.log(err);
        }
    }
// click
    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>SIGN UP</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Name</div>
                        <input className="name input" type="text" name="Name" placeholder="Your Name" required="" onChange={(e) => nameSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Confirm  Password</div>
                        <input className="confirmPassword input" type="password" name="ConfirmPassword" placeholder="**********" onChange={(e) => setConfirm(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleSignup}>
                        Sign Up
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Signup;

```

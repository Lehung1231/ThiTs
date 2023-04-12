import { BrowserRouter, Routes, Route, Router  } from "react-router-dom";
import './App.css'
import AdminProject from "./components/admin/adminProject";
import AdminLayout from "./components/admin/adminLayout";
import AdminEdit from "./components/admin/editAdmin";
import AdminAdd from "./components/admin/addAdmin";
import Signup from "./components/admin/singup";
import Signin from "./components/admin/singin";
import User from "./components/admin/user";

function App() {
 

  return <BrowserRouter>
      <Routes>
      <Route path='/' element={<AdminLayout/>}>
        <Route index element={<AdminProject></AdminProject>}/>
        <Route path='/edit/:id' element={<AdminEdit/>}/>
        <Route path='/add' element={<AdminAdd/>}/>
        <Route path='/singup' element={<Signup/>}/>
        <Route path='/singin' element={<Signin/>}/>
      </Route>
      <Route path='/user' element={<User/>}>
      </Route>
      </Routes>
   </BrowserRouter>
     
  
}

export default App

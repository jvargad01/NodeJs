import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AutProvider} from "./context/authContext";
import {TaskProvider} from "./context/TasksContext";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import TasksFromPage from './pages/TasksFromPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <AutProvider>
      <TaskProvider>
        
          <BrowserRouter>
            <main className="container mx-auto px-10">              
             <Navbar/>
             <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/register' element={<RegisterPage/>} />
              <Route element={<ProtectedRoute/>}>
                <Route path='/tasks' element={<TasksPage/>} />
                <Route path='/tasks/new' element={<TasksFromPage/>} />
                <Route path='/tasks/:id' element={<TasksFromPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
              </Route> 
             </Routes>
            </main>
          </BrowserRouter>
         
      </TaskProvider>
    </AutProvider>
  );
}

export default App;
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbar() {
    const {isAuthenticated, logout, user} = useAuth();

    return (
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to={
          isAuthenticated ? "/tasks" : "/"
        }>
           <h1 className="text-2x1 font-bold">Tasks Manager</h1>
        </Link>
          
        <ul className="flex gap-x-2">
            {isAuthenticated ? (
              <>
                <li>
                  welcome User: {user.username}
                </li>
                <li>
                <Link to="/tasks/new" className="bg-indigo-500 px-4 py-1 rounded-sm">add Task</Link>
                </li>
                <li>
                <Link to="/" onClick={()=>{
                  logout();
                }} className="bg-indigo-100 px-4 py-1 rounded-sm">logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                 <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
                </li>
                <li>
                 <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
                </li>
              </>   
            )}
            
        </ul>   
      </nav>
    )
}

export default Navbar;
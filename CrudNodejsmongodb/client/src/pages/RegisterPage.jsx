import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function RegisterPage() {

    const {register, 
           handleSubmit,
           formState:{errors},
          }= useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
     if(isAuthenticated) navigate('/tasks')
    },[isAuthenticated]);
    
    const onSubmit = handleSubmit(async (values) => {
        signup(values)
        });

    return (
     <div className="flex h-[clac[100vh-100px]] items-center justify-center">
       <div className="bg-zinc-800 max-w-md p-10 rounded-md"> 
        {
         registerErrors.map((error, i ) => (
            <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>{error}</div>
         ))
        }
        <form onSubmit={onSubmit}>
             
             <input type="text" {...register("username",{required: true})} 
             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             placeholder="UserName"/>
             {errors.username &&(
                <p className="text-red-500">UserName is required</p>
             )}
             <input type="email" {...register("email",{required: true})}
             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             placeholder="Email"/>
             {errors.email &&(
                <p className="text-red-500">Email is required</p>
             )}
             <input type="password" {...register("password",{required: true})}
             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             placeholder="Password"/>
             {errors.password &&(
                <p className="text-red-500">Password is required</p>
             )}
              
             <button type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Register</button>
        </form>
        <p className="flex gap-x-2 justify-between">
            alrealy have an account? <Link to="/login" className="text-sky-500">Login</Link>
           </p>
     </div>
     </div>       
    )
}

export default RegisterPage;
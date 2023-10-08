import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';


const Login = () => {
  const { signInUser } = useContext(UserContext)
  const Navigate = useNavigate()
  const handleSignIn = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        e.target.reset()
        Navigate("/")


      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (

    <div className="hero min-h-screen">
      <div className="md:p-10 bg-orange-500 rounded-xl   hero-content flex-col lg:flex-row-reverse">

        <div className="bg-orange-200 card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white"><a href="/">Login</a></button>
              <div className="space-y-2">
                <p className="text-center">Or Sign Up Using</p>
                <div className="flex justify-center gap-5">
                <a href="/"><FcGoogle className="text-2xl"></FcGoogle></a> 
                <a href=""><BsFacebook className="text-2xl"></BsFacebook></a> 
                <a href=""><BsGithub className="text-2xl"></BsGithub></a>
                </div>
              </div>
            </div>
            <p>New user? please <Link className="text text-orange-800 underline" to="/register">register</Link></p>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
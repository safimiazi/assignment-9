import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/AuthProvider/AuthProvider";
import toast from 'react-hot-toast';

const Register = () => {

    const { createUser,profileUpdate } = useContext(UserContext)
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return;
        } else if (!/[A-Z]/.test(password)) {
           toast.error("Your password needs an uppser case letter")
           return;
        } else if (!/[0-9]/.test(password)) {
            toast.error("Your password needs a number")
            return;
        } else {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    e.target.reset()
                    toast.success('Register successfully!')
                    profileUpdate(name,image)
                    .then(result => {
                        console.log(result.user)
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                    navigate('/')

                })
                .catch(error => {
                    toast.error("Registration not done")
                    console.log(error)

                })

        }



    }
    return (
        <div className="hero min-h-screen">
            <div className="md:p-10 bg-orange-500 rounded-xl   hero-content flex-col lg:flex-row-reverse">

                <div className="bg-orange-200 card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register in to our platform</h5>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                        </div>
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
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white">Register</button>
                        </div>
                        <p>Already register? please <Link className="text text-orange-800 underline" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { Link } from "react-router-dom";

const Register = () => {
    const handleForm = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
    }
    return (
        <div className="hero min-h-screen">
            <div className="p-10 bg-orange-500 rounded-xl   hero-content flex-col lg:flex-row-reverse">

                <div className="bg-orange-200 card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleForm} className="card-body">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
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
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white">Login</button>
                        </div>
                        <p>Already register? please <Link className="text text-orange-800 underline" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
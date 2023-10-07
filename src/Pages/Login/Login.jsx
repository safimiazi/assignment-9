

const Login = () => {
  return (

    <div className="hero min-h-screen">
      <div className="p-10 bg-orange-500 rounded-xl   hero-content flex-col lg:flex-row-reverse">

        <div className="bg-orange-200 card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form className="card-body">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
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
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
        {/* <div>
            <img src={} alt="" />
        </div> */}
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg p-10">
        <h2 className="text-2xl font-semibold text-center">LogIn Your Account</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold mb-4">Don't Have An Account ? <Link to="/auth/register" className="text-[#E09D15]">Register</Link></p>
      </div>
    </div>
  );
};

export default LogIn;

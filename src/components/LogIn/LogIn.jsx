import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";

const LogIn = () => {
  const { userLogin, setUser, googleLogin } = useContext(AuthContext);
  const handleLogInForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // toast.success("Successfully Logged In!")
      })
      .catch((error) => {
        // toast.warn("Login Failed! Please check your email and password")
        alert(error)
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <div>
            <img src={} alt="" />
        </div> */}
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg p-10">
        <h2 className="text-2xl font-semibold text-center">
          LogIn Your Account
        </h2>
        <form onSubmit={handleLogInForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
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
        <div onClick={googleLogin}><button className="btn w-full mb-3 bg-white rounded-full"><FaGoogle></FaGoogle> Google Login</button></div>
        <p className="text-center font-semibold">
          Don't Have An Account ?{" "}
          <Link to="/auth/register" className="text-[#E09D15]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;

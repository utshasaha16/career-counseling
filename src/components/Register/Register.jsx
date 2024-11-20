import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
    const { createNewUser, setUser, googleLogin, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleRegisterFormSubmit = (e) => {
        e.preventDefault();
        setError("")
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        if (password.length < 6) {
            setError("Password must at least 6 characters")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must at least one lowercase")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must at least one uppercase")
            return;
        }
        console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success("Successfully Register!")
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                toast.warn("Registration Failed! Please check your email and password")
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
                <form onSubmit={handleRegisterFormSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
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
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 top-12">{
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }</button>
                    </div>
                    {error && <p className="text-red-600">{error}</p>}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3C4483] text-white">Register</button>
                    </div>
                </form>
                <div onClick={googleLogin}><button className="btn w-full mb-3 bg-white rounded-full"><FaGoogle></FaGoogle> Google Login</button></div>
                <p className="text-center font-semibold mb-4">
                    AllReady Have An Account ?{" "}
                    <Link to="/auth/logIn" className="text-[#E09D15]">
                        LogIn
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

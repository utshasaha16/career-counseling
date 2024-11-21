import { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { toast } from "react-toastify";


const ForgetPassword = () => {
    const auth = getAuth(app)
    const { user } = useContext(AuthContext);
    const emailRef = useRef()
    const handleForgetPassword = (e) => {
        e.preventDefault()
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            toast.warn("please provide your email")
            
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success("reset email sent, please check your email")
                })
                .catch((err) => {
                    toast.warn("Failed to send reset email. Please try again.")
                })
        }

    }
    return (
        <div className="max-w-md mx-auto  pt-14 pb-14">
            <div className="p-6 bg-base-100 shadow-xl">
                <h1 className="text-center text-lg font-medium pb-3">Forget Your Password</h1>
                <div className="flex flex-col items-center space-y-3">

                    <p>{user?.email}</p>
                </div>
                <form onSubmit={handleForgetPassword} className="pt-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        ref={emailRef}
                        placeholder="email"
                        className="input input-bordered w-full"
                        required
                    />

                    <div className="flex justify-center pt-5">
                        <button className="btn bg-[#3C4483] text-white">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
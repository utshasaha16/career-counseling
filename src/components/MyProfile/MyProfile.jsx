import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);
    const [updateUserInfo, setUpdateUserInfo] = useState({
        displayName:user?.name || "",
        photoURL:user?.photoURL || ""
    })
    const handleProfileUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log({ name, photo });
        updateUserProfile({displayName:name, photoURL: photo})
        .then(() => {
            const updateInfo = {...user, displayName:name, photoURL:photo}
            setUser(updateInfo)
            setUpdateUserInfo(updateInfo)
            alert("Profile Update successfully")
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='max-w-md mx-auto  pt-14 pb-14'>
            <div className='p-6 bg-base-100 shadow-xl'>
                <h1 className='text-center text-lg font-medium pb-3'>My profile</h1>
                <div className='flex flex-col items-center space-y-3'>
                    <img className='w-20 h-20 rounded-full' src={updateUserInfo?.photoURL} alt="" />
                    <h3>{updateUserInfo.displayName}</h3>
                    <p>{user?.email}</p>
                </div>
                <form onSubmit={handleProfileUpdate} className='pt-3'>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        name='name'
                        placeholder="name"
                        className="input input-bordered w-full" required />
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text"
                        name='photo'
                        placeholder="PhotoURL"
                        className="input input-bordered w-full" required />
                    <div className='flex justify-center pt-5'>
                        <button className='btn bg-[#3C4483] text-white'>Save Change</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default MyProfile;
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";


const ServiceDetails = () => {
    const { image, serviceName, category, description, duration, counselor, rating } = useLoaderData();
    const {date, time} = duration;
    const [feedback, setFeedback] = useState("")
    const [comments, setComments] = useState([])
    const handleSubmitFeedback = () => {
        setComments([...comments, feedback])
        setFeedback("")
    }
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-[90%] mx-auto mt-10">
                <div className="p-5 bg-base-100 shadow-xl">
                    <figure>
                        <img className="rounded-lg"
                            src={image}
                            alt="career counseling image" />
                    </figure>
                    <div className="">
                        <h1 className="card-title mt-3">{counselor}</h1>
                        <div className="flex gap-5 items-center mt-3">
                        <h2 className="font-semibold">{serviceName}</h2>
                        <p className="font-medium">{category}</p>
                        </div>
                        <p className="mt-3 text-gray-600">{description}</p>
                        <p className="mt-3 font-semibold">Rating: {rating}</p>
                        <div className="divider"></div>
                        <div className="flex gap-4 font-semibold">
                        <p>Date: {date}</p>
                        <p>Time: {time}</p>
                        </div>
                        <div className="divider"></div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold mb-3">Provide Your Feedback</h3>
                            <input type="text" placeholder="Type here" onChange={(e) => setFeedback(e.target.value)} className="input input-bordered w-full max-w-xs" />
                            <button onClick={handleSubmitFeedback} className="mt-3 px-10 py-2 bg-[#E09D15] rounded-lg text-white">Submit Feedback</button>
                        </div>
                        <div className="divider"></div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold">Submitted Comments:</h3>
                        {comments.length > 0 ? (
                            <ul className="mt-3 list-disc list-inside">
                                {comments.map((comment, index) => (
                                    <li key={index} className="mt-2 text-gray-700">
                                        {comment}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 mt-3">No comments yet. Be the first to provide feedback!</p>
                        )}
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ServiceDetails;
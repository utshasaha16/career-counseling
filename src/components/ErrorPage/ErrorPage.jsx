import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        
        <div className="pt-32 p-5 text-center">
            <h1 className="text-xl font-bold">Oops !!</h1>
            <p className="mt-3 font-semibold">404 Not Found</p>
            <p className="font-medium mt-3">Sorry, you are looking for an unexpected page</p>
            <p className="mt-3">
            {error.statusText || error.message}
            </p>
            <Link to="/"><button className="px-10 py-2 bg-[#3C4483] rounded-lg text-white mt-3">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;
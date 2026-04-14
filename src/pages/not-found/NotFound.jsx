import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <Helmet>
                <title>Not Found | Keen Keeper</title>
                <meta name="description" content="keen keeper Not Found page" />
            </Helmet>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 text-center px-4">

      <h1 className="text-7xl md:text-9xl font-extrabold text-blue-500">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <div className="text-5xl mt-4">😕</div>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
        </>
    );
};

export default NotFound;
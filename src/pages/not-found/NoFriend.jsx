import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NoFriend = () => {
  return (
    <>
    <Helmet>
        <title>No Friend Found | Keen Keeper</title>
        <meta name="description" content="keen keeper No Data Found page" />
    </Helmet>
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">

      <div className="text-6xl">😔</div>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        No Data Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        No profile or data found with this ID. Please verify the ID and try again
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>

    </div>
    </>
  );
};

export default NoFriend;
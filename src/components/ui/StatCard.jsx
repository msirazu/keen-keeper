const StatCard = ({ num, text }) => {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col justify-center items-center hover:shadow-xl cursor-pointer transition duration-400 hover:translate-y-1 hover:border-gray-200 border border-gray-100">
      <h3 className="font-bold text-xl">{num}</h3>
      <p className="footer-text-one text-center">{text}</p>
    </div>
  );
};

export default StatCard;
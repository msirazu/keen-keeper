const HomeStatCard = ({ num, text }) => {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl">{num}</h3>
      <p className="footer-text-one text-center">{text}</p>
    </div>
  );
};

export default HomeStatCard;
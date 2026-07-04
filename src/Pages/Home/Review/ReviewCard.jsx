import quoteIcon from "../../../assets/reviewQuote.png";

const ReviewCard = ({review}) => {
    // console.log(review)
    const{userName,user_photoURL,user_email,review:user_review}=review

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-md">
      {/* Quote Icon */}
      <img src={quoteIcon} alt="Quote" className="w-10 mb-6" />

      {/* Review */}
      <p className="text-gray-500 leading-8 text-[17px]">
       {user_review}
      </p>

      {/* Divider */}
      <div className="border-t-2 border-dashed border-gray-200 my-7"></div>

      {/* Reviewer */}
      <div className="flex items-center gap-4">
{
  !user_photoURL ? (
    <div className="w-14 h-14 rounded-full bg-teal-700"></div>
  ) : (
    <img
      src={user_photoURL}
      alt="User"
      className="w-14 h-14 rounded-full object-cover"
    />
  )
}
        <div>
          <h3 className="text-xl font-bold text-[#0F4C5C]">
            {userName}
          </h3>
          <p className="text-gray-500 text-lg">
{      user_email      }     
     </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
import { Link } from "react-router";
import errorMascot from "../../assets/error2.png";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 ">
      <div className="flex flex-col items-center justify-center gap-5 bg-base-100 rounded-[32px] w-full max-w-3xl py-16 px-6">
        
        {/* Mascot - blended into card background */}
        <img
          src={errorMascot}
          alt="404 Error mascot"
          className=" h-auto mix-blend-multiply"
        />

        <h1 className="text-5xl font-extrabold text-base-content">
          Error 404
        </h1>

        <Link to="/" className="btn btn-primary text-white hover:brightness-110 rounded-full px-6">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
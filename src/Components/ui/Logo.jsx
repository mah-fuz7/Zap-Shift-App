import logo from "../../assets/logo.png";

const Logo = ({ className = "" }) => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="ZapShift Logo" />
      <span className={`font-bold text-2xl -ml-4.5 ${className}`}>
        ZapShift
      </span>
    </div>
  );
};

export default Logo;
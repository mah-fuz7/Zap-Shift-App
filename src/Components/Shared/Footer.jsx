import Logo from "../ui/Logo";
import linkdin from "../../assets/Social-media-icons/linkedin.png"
import X from "../../assets/Social-media-icons/twitter.png"
import facebook from "../../assets/Social-media-icons/facebook.png"
import youtube from "../../assets/Social-media-icons/youtube.png"
const Footer = () => {
    return (
       <footer className=" footer footer-horizontal footer-center bg-black text-primary-content p-10 rounded-4xl">
  <aside>
<Logo className="text-white" />
    <p className="">
     Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
    </p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4" >
        <p>navlink here</p>
    </div>
    <div className="grid grid-flow-col gap-4">
      <img src={linkdin}alt="linkdin-logo"  className="h-9"/>
      <img src={X}alt="X-logo"  className="h-9 bg-white rounded-3xl"/>
      <img src={facebook}alt="fb-logo"  className="h-9"/>
      <img src={youtube}alt="youtube-logo"  className="h-9"/>
    </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>

  </nav>
</footer>
    );
};

export default Footer;
import Banner from "../../Components/ui/Banner";
import Brands from "../../Components/ui/Brands";
import HowItWorks from "../../Components/ui/HowItWorks";
import OurServices from "../../Components/ui/OurServices";
import ServiceFeatures from "../../Components/ui/ServiceFeatures";

const Home = () => {
    return (
        <div>
           <div className="mx-12.5 ">
             <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <Brands></Brands>
           <ServiceFeatures></ServiceFeatures>
                      </div>

        </div>
    );
};

export default Home;
import Banner from "../../Components/ui/Banner";
import FAQ from "../../Components/ui/FAQ";
import HowItWorks from "../../Components/ui/HowItWorks";
import Merchant from "../../Components/ui/Merchant";
import OurServices from "../../Components/ui/OurServices";
import ServiceFeatures from "../../Components/ui/ServiceFeatures";
import Brands from "./Brands/Brands";

const Home = () => {
    return (
        <div>
           <div className="mx-12.5 ">
             <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <Brands></Brands>
           <ServiceFeatures></ServiceFeatures>
           <Merchant></Merchant>
           <FAQ></FAQ>
                      </div>

        </div>
    );
};

export default Home;
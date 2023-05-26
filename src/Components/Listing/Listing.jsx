import { useContext } from "react";
import { AuthContext } from "../../Share/AuthProvider/AuthProvider";
import SearchingSection from "../SearchingSection/SearchingSection";
import Cards from "../Cards/Cards";
import TotalRevenue from "../TotalRevenue/TotalRevenue";



const Listing = () => {
   

    return (
        <section className="mt-8 ml-2">
           <SearchingSection></SearchingSection>
           <Cards></Cards>
           <TotalRevenue></TotalRevenue>
        </section>
    );
};

export default Listing;
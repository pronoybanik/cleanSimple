import RevenueStats from "../RevenueStats/RevenueStats";
import SaleProgress from "../SaleProgress/SaleProgress";

const TotalRevenue = () => {
    return (
        <div className="flex justify-between mt-10">
            <RevenueStats></RevenueStats>

            <SaleProgress></SaleProgress>
        </div>
    );
};


export default TotalRevenue;
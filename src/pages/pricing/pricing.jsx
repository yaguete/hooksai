import { useEffect } from "react";
import { Typography } from "@mui/material";
import "./pricing.css"
import PricingSection from "../../sections/PricingSection/PricingSection";


const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <Typography variant="h1" sx={{ marginTop: "5rem" }}>
            <PricingSection />
        </Typography>
        </>
    )

}

export default Pricing;
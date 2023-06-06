import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
    return (
        <div style={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: "1" }}>
            <Oval
                ariaLabel="loading-indicator"
                height={60}
                width={100}
                strokeWidth={4}
                strokeWidthSecondary={3}
                color="teal"
                secondaryColor="black"
            />
        </div>
    );
};

export default Loader;
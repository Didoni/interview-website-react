import React from "react";

function InfoBanner(props) {
    const bannerStyle = {
        backgroundColor: props.success ? "green" : props.failure ? "red" : "grey" 
    };

    return(
        <div className="info-banner" style={bannerStyle}>
            <p>{props.text}</p>
        </div>
    );
}

export default InfoBanner
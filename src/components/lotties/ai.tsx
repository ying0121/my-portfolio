import React from "react";
import Lottie from "lottie-react";
import aiLottie from "../../../public/assets/lotties/ai.json";

const AILottie: React.FC = () => {
    return (
        <div style={{width: 240, height: 240}}>
            <Lottie animationData={aiLottie} loop autoplay />
        </div>
    )
}

export default AILottie;

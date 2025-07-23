import React from "react";
import Lottie from "lottie-react";
import codeLottie from "../../../public/assets/lotties/code.json";

const CodeLottie: React.FC = () => {
    return (
        <div style={{width: 45, height: 45}}>
            <Lottie animationData={codeLottie} loop autoplay />
        </div>
    )
}

export default CodeLottie;

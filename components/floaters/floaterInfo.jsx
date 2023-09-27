import React from "react";
import { AiFillPhone, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";

const FloaterInfo = (props) => {
    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4" onClick={props.onClick}>
            <div className="call w-16 h-16 rounded-full cursor-pointer hover:scale-110 transition-all duration-200  bg-primaryColor-400 flex items-center justify-center text-2xl text-white">
                <AiFillPhone />
            </div>
            <div className="call w-16 h-16 rounded-full cursor-pointer hover:scale-110 transition-all duration-200  bg-primaryColor-400 flex items-center justify-center text-2xl text-white">
                <AiFillMail />
            </div>
            <div className="call w-16 h-16 rounded-full cursor-pointer hover:scale-110 transition-all duration-200  bg-themeGreen flex items-center justify-center text-2xl text-white">
                <AiOutlineWhatsApp />
            </div>
        </div>
    );
};

export default FloaterInfo;

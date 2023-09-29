import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdCheck } from "react-icons/md";

function CheckboxContainer({ onCheckboxClick }) {
    const [checked, setChecked] = useState("original");

    const handleCheckboxChange = (event) => {
        const { value } = event.target;

        if (value === checked) {
            setChecked("");
        } else {
            setChecked(value);
        }

        onCheckboxClick(event);
    };

    const variants = {
        checked: {
            scale: 1.2,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 20,
            },
        },
        unchecked: {
            scale: 1,
        },
    };

    return (
        <div className="flex space-x-4 lg:my-6 xl:my-10 z-30">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="original"
                    name="original"
                    value="original"
                    checked={checked === "original"}
                    className="hidden"
                    onChange={handleCheckboxChange}
                />
                <motion.label
                    htmlFor="original"
                    className="flex items-center cursor-pointer"
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div
                        className={`w-5 xl:w-6 h-5 xl:h-6 border-2 border-solid  bg-primaryColor-100 border-primaryColor-500 rounded-full flex items-center justify-center ${
                            checked === "original" ? "bg-blackText" : ""
                        }`}
                        variants={variants}
                        initial={checked === "original" ? "checked" : "unchecked"}
                        animate={checked === "original" ? "checked" : "unchecked"}
                    >
                        {checked === "original" && (
                            <MdCheck className="text-primaryColor-800 text-base xl:text-2xl font-bold" />
                        )}
                    </motion.div>
                    <span className="ml-2 text-sm xl:text-lg text-primaryColor-500 font-sans tracking-wider font-semibold">
                        ORIGINAL
                    </span>
                </motion.label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="print"
                    name="print"
                    value="print"
                    checked={checked === "print"}
                    className="hidden"
                    onChange={handleCheckboxChange}
                />
                <motion.label
                    htmlFor="print"
                    className="flex items-center cursor-pointer"
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div
                        className={`w-5 xl:w-6 h-5 xl:h-6   border-2 border-solid  bg-primaryColor-100 border-primaryColor-500 rounded-full flex items-center justify-center ${
                            checked === "print" ? "bg-blackText" : ""
                        }`}
                        variants={variants}
                        initial={checked === "print" ? "checked" : "unchecked"}
                        animate={checked === "print" ? "checked" : "unchecked"}
                    >
                        {checked === "print" && <MdCheck className="text-primaryColor-800 text-base md:text-2xl" />}
                    </motion.div>
                    <span className="ml-2 text-sm xl:text-lg text-primaryColor-500 font-sans tracking-wider font-semibold ">
                        DRUCK
                    </span>
                </motion.label>
            </div>
        </div>
    );
}

export default CheckboxContainer;

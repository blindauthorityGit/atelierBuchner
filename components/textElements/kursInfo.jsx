import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// COMPS
import { CheckboxContainer1 } from "../inputs/checkmarks";
import { H2, H3, H4, H5 } from "../typography/headlines";
import { MainButton, GhostButtoSmall } from "../buttons";
import { Anfrage } from "../modalContent";

//STORE
import useStore from "../../store/store";

const KursInfo = ({ data, original, setOriginal, setDruckPreis, druckPreis }) => {
    const [selectedOption, setSelectedOption] = useState("druck1");

    //GLOBAL STATES
    const showOverlay = useStore((state) => state.showOverlay);
    const setShowOverlay = useStore((state) => state.setShowOverlay);
    const openModal = useStore((state) => state.openModal);
    const setModalContent = useStore((state) => state.setModalContent);

    const router = useRouter();

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div
            // data-aos="fade-up"
            // ref={boxRef}
            className="col-span-12 h-full z-20 flex flex-col justify-center items-start lg:col-span-4 px-4 md:px-0 mt-2 lg:pl-6 xl:pl-10 lg:pt-0"
        >
            <H4 klasse="text-primaryColor-200 mb-6">{data.headline}</H4>
            <H2 klasse="text-primaryColor-200 mb-6">{data.akademieTitel}</H2>
            <hr className="border-primaryColor-700" />
            <div className=" text-sm xl:text-lg font-sans text-primaryColor-500 font-semibold mt-4">{data.thema}</div>
            {/* <p className="font-regular text-sm md:text-lg mt-2 ">{post.description}</p> */}
            <div className="font-regular text-sm xl:text-regular font-sans text-primaryColor-200">{data.thema}</div>
            <div className="mt-6 lg:mt-10 w-full">
                {data.ablauf &&
                    data.ablauf.map((e, i) => {
                        return (
                            <>
                                {/* <hr className="border-primaryColor-700 mb-2" /> */}
                                <div className="flex py-2">
                                    <div className="left w-1/4  lg:mr-4 font-sans text-primaryColor-200 font-bold">
                                        {e.TAG}
                                    </div>
                                    <div className="right w-2/3 font-sans text-primaryColor-200 tracking-wide leading-relaxed">
                                        {e.Beschreibung}
                                    </div>
                                </div>
                                <hr className="border-primaryColor-700 mt-2 mb-2" />{" "}
                            </>
                        );
                    })}
                {/* <div className="details text-xs  xl:text-base mt-6">
                    <hr className="border-primaryColor-700" />
                    <div className="flex py-2">
                        <div className="left w-1/3  lg:mr-4 font-sans text-primaryColor-200">Dimensionen</div>
                        <div className="right w-2/3 font-sans text-primaryColor-200">{data.thema}</div>
                    </div>
                    <hr className="border-primaryColor-700" />
                    <div className="flex py-2">
                        <div className="left w-1/3  lg:mr-4 font-sans text-primaryColor-200">Location</div>
                        <div className="right w-2/3 font-sans text-primaryColor-200">{data.thema}</div>
                    </div>
                    <hr className="border-primaryColor-700" />
                </div> */}
            </div>

            <div className="w-full flex  items-center space-x-4 mt-12">
                <GhostButtoSmall
                    link="#"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(showOverlay);
                        setShowOverlay(true);
                        setModalContent(<Anfrage image={post.image} sold={post.sold}></Anfrage>);
                        openModal();
                    }}
                    klasse="border border-blackText  hover-underline-animation  flex items-center justify-center text-blackText mt-4 lg:mt-8 py-2 text-sm sm:text-base sm:py-3 px-6 min-w-[10rem] w-full max-w-[100%]  uppercase rounded-md"
                >
                    <span className=""> Anfragen</span>
                </GhostButtoSmall>

                <MainButton
                    // disabled={disabled}
                    link="#"
                    onClick={(e) => {
                        openModal();
                        setShowPayment(true);
                    }}
                    // className={`bg-blackText hover-underline-animation  flex items-center justify-center text-primaryColor-200 mt-4 lg:mt-8 py-2 text-sm sm:text-base sm:py-3 px-6 min-w-[10rem] w-full max-w-[100%]  uppercase rounded-md ${
                    //     disabled ? "opacity-30" : ""
                    // }`}
                >
                    <span className=""> Kaufen</span>
                </MainButton>
            </div>
            {/* <div className="mt-6 lg:hidden">
            <PaymentIconsContainer></PaymentIconsContainer>
        </div>
        <div className="mt-8 lg:hidden">
            <InfoBox1></InfoBox1>
        </div> */}
        </div>
    );
};

export default KursInfo;

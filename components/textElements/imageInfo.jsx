import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// COMPS
import { CheckboxContainer1 } from "../inputs/checkmarks";
import { H2 } from "../typography/headlines";
import { MainButton, GhostButtoSmall } from "../buttons";
import { Anfrage } from "../modalContent";

//STORE
import useStore from "../../store/store";

const ImageInfo = ({ post, original, setOriginal, setDruckPreis, druckPreis }) => {
    const [selectedOption, setSelectedOption] = useState("druck1");

    const disabled = post.sold && original ? true : false;

    //GLOBAL STATES
    const showOverlay = useStore((state) => state.showOverlay);
    const setShowOverlay = useStore((state) => state.setShowOverlay);
    const openModal = useStore((state) => state.openModal);
    const setModalContent = useStore((state) => state.setModalContent);

    const router = useRouter();

    useEffect(() => {
        setSelectedOption("druck1");
        // setDisabled(post.sold); // Set the initial selected value to "druck1" on page load
    }, [post]);

    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === "druck1") {
            setDruckPreis(post.druckeInfos.titel);
            router.push({
                pathname: `/galerie/${post.slug.current}`,
                query: { druck: 1 },
            });
        } else if (selectedValue === "druck2") {
            setDruckPreis(post.druckeInfos.druck1Preis && post.druckeInfos.druck1Preis);
        } else {
            setDruckPreis(post.druckeInfos.druck2Preis && post.druckeInfos.druck2Preis);
        }
    };

    useEffect(() => {
        console.log(post);
    }, []);

    return (
        <div
            // data-aos="fade-up"
            // ref={boxRef}
            className="col-span-12 h-full z-20 flex flex-col justify-center lg:col-span-4 px-4 md:px-0 mt-2 lg:pl-6 xl:pl-10 lg:pt-0"
        >
            <H2 klasse="text-primaryColor-200 mb-6">{post.titel_Bild}</H2>
            <hr className="border-primaryColor-700" />
            <div className=" text-sm xl:text-lg font-sans text-primaryColor-500 font-semibold mt-4">{post.year}</div>
            {/* <p className="font-regular text-sm md:text-lg mt-2 ">{post.description}</p> */}
            <div className="font-regular text-sm xl:text-regular font-sans text-primaryColor-200">{post.technik}</div>
            <div className="mt-6 lg:mt-0">
                <CheckboxContainer1
                    onCheckboxClick={(e) => {
                        e.target.value === "original" ? setOriginal(true) : setOriginal(false);
                        e.target.value === "original" ? null : setDruckPreis(post.druckeInfos.titel);
                        console.log(e.target.value);
                    }}
                ></CheckboxContainer1>
                {original ? (
                    <div className="details text-xs  xl:text-base mt-6">
                        <hr className="border-primaryColor-700" />
                        <div className="flex py-2">
                            <div className="left w-1/3  lg:mr-4 font-sans text-primaryColor-200">Dimensionen</div>
                            <div className="right w-2/3 font-sans text-primaryColor-200">{post.dimensions}</div>
                        </div>
                        <hr className="border-primaryColor-700" />
                        <div className="flex py-2">
                            <div className="left w-1/3  lg:mr-4 font-sans text-primaryColor-200">Location</div>
                            <div className="right w-2/3 font-sans text-primaryColor-200">{post.location}</div>
                        </div>
                        <hr className="border-primaryColor-700" />
                        <div className="flex py-2">
                            <div className="left w-1/3  lg:mr-4 font-sans text-primaryColor-200">Verfügbarkeit</div>
                            <div className="right w-2/3">
                                {post.sold ? (
                                    <span className="font-sans text-themeRed">Verkauft</span>
                                ) : (
                                    <span className="font-sans text-themeGreen">Verfügbar</span>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="details text-xs xl:text-base mt-6">
                        <hr className="border-primaryColor-700" />
                        <div className="flex py-2 items-center">
                            <div className="left w-1/3 font-sans text-primaryColor-200">Dimensionen</div>
                            <div className="right">
                                <select
                                    id="printSelect"
                                    name="printSelect"
                                    className="bg-transparent font-sans text-primaryColor-200 "
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                >
                                    <option
                                        className="px-8 p-8 bg-primaryColor-500 font-sans text-sm text-primaryColor-950"
                                        value="druck1"
                                        selected
                                    >
                                        {post.dimensions} (Originalgröße)
                                    </option>
                                    <option className="font-sans text-sm text-primaryColor-950" value="druck2">
                                        {post.druckeInfos.druck1 && post.druckeInfos.druck1}
                                    </option>
                                    <option className="font-sans text-sm text-primaryColor-950" value="druck3">
                                        {post.druckeInfos.druck2 && post.druckeInfos.druck2}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <hr className="border-primaryColor-700" />
                        <div className="flex py-2">
                            <div className="left w-1/3 font-sans text-primaryColor-200">Lieferzeit</div>
                            <div className="right font-sans text-primaryColor-200">3-5 Werktage</div>
                        </div>
                        <hr className="border-primaryColor-700" />
                        <div className="flex py-2">
                            <div className="left w-1/3 font-sans text-primaryColor-200">Lieferzeit</div>
                            <div className="right font-sans text-primaryColor-200">3-5 Werktage</div>
                        </div>
                        <hr className="border-primaryColor-700" />
                    </div>
                )}
            </div>
            <div className="preis mt-6">
                <div className="original text-xs xl:text-base text-primaryColor-500 font-sans">
                    {" "}
                    {original ? "ORIGINAL" : "PRINT"}
                </div>
                <div className="sum text-lg xl:text-3xl font-headline text-primaryColor-200 font-thin ">
                    {original ? (
                        post.sold ? (
                            <div>
                                verkauft{" "}
                                <span className="text-xs text-primaryColor-600 font-regular">(Prints verfügbar)</span>{" "}
                            </div>
                        ) : (
                            `EUR ${post.price},-`
                        )
                    ) : (
                        `EUR ${druckPreis},-`
                    )}
                </div>
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
                    disabled={disabled}
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

export default ImageInfo;

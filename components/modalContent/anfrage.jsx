import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import { Form1 } from "../contactForm";
import Image from "next/image";
import { H2, H3 } from "../typography/headlines";

//funtions
import urlFor from "../../functions/urlFor";

const ContactInfo = (props) => {
    return (
        <>
            <div className="col-span-6">
                <div className="text mb-2">
                    <H3 klasse="uppercase">Interesse?</H3>
                    {/* <p className="text-sm lg:text-lg mt-4">Kontaktieren Sie uns unter:</p> */}
                </div>{" "}
                <Form1 bild={props.bild} />
                <div className="bg-primaryColor-50 p-4 lg:p-8 rounded-md  text-sm lg:text-lg">
                    <div className="flex items-center mb-2">
                        <FaPhone className="mr-2 lg:mr-6 text-primaryColor-500" size={18} />
                        <p className="text-gray-700">
                            <a href="tel:+436509445140">+43 650 / 944 51 40</a>
                        </p>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 lg:mr-6 text-primaryColor-500" size={18} />
                        <p className="text-gray-700">office@atelierbuchner.at</p>
                    </div>
                    {/* <div className="flex items-center">
                    <FaMapMarker className="mr-2 lg:mr-6 text-primaryColor-500" size={18} />
                    <p className="text-gray-700">
                        Prof. Sepp Buchner-Straße 528<br></br>2823 Pitten
                    </p>
                </div> */}
                </div>
                <div className="verfuegbar text-xs mt-2">
                    {props.sold ? (
                        <div>
                            Dieses Bild können Sie als Druck in unterschiedlichen Größen erwerbe. <br></br>
                        </div>
                    ) : (
                        <div>
                            Dieses Bild können Sie in der Galerie Buchner besichtigen. <br></br>
                            <br></br>
                            <strong>Termine auf Anfrage</strong>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-span-6 relative">
                <Image // {...ImagePropsGallery(i)}
                    src={urlFor(props.image).url()}
                    blurDataURL={urlFor(props.image).url()}
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    className={`z-10 top-0`}
                    onLoad={() => {
                        console.log("LOADED");
                        // setImageLoaded(true);
                    }}
                    priority
                    style={
                        {
                            // transform: `translateX(${x}px) scale(${1 - Math.abs(x) / 1000})`,
                            // opacity: `${1 - Math.abs(x) / 10}`,
                        }
                    }
                />
            </div>
        </>
    );
};

export default ContactInfo;

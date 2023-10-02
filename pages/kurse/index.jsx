import Head from "next/head";
import { useState, useEffect } from "react";

//SANITY
import client from "../../client";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//PARALLAX
import { Parallax } from "react-scroll-parallax";

// COMPONENTS
import Section from "../../components/layout/section";
import { CenterText, BigCenterText } from "../../components/textElements";
import { KursCard } from "../../components/cards";
import { GhostButton } from "../../components/buttons";
import { ImgText1 } from "../../components/imgText";
import { KursInfo } from "../../components/textElements";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

export default function Kurse({ dataBilder, dataAkademie, dataChristine, dataBlog }) {
    const [showModal, setShowModal] = useState(false);
    const [kursIndex, setKursIndex] = useState(0);

    const handleClick = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        console.log(dataBilder, dataAkademie, dataChristine, dataBlog);
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>
            <Section klasse="text-center">
                <CenterText klasse="mb-4" topLine="Unser Spektrum an" headline="KURSPROGRAMM"></CenterText>
                <Parallax className=" h-full grid col-span-12 grid-cols-12 gap-2" translateY={["-80px", "60px"]}>
                    {dataAkademie.map((e, i) => {
                        return <KursCard dataFull={dataAkademie} data={e} />;
                    })}
                </Parallax>

                <BigCenterText
                    klasse="mt-10"
                    text="Unser Mal-Kursangebot ist der perfekte Ort, um Farben fließen zu lassen und kreative Visionen zum Leben zu erwecken. Ob Sie ein Anfänger oder ein fortgeschrittener Künstler sind, hier gibt es Schwerpunkte für alle Stile und Interessen."
                />
            </Section>
            <Section klasse="!pt-0">
                {dataAkademie.map((e, i) => {
                    return (
                        <Section
                            dataaos={`${i % 2 === 0 ? "fade-right" : "fade-left"}`}
                            klasse={`col-span-12 ${i % 2 === 0 ? "" : null}`}
                        >
                            <ImgText1 data={e} order={i % 2 === 0 ? null : "order-last"}>
                                <KursInfo data={e}></KursInfo>
                            </ImgText1>
                        </Section>
                    );
                })}
            </Section>
        </>
    );
}

export const getStaticProps = async (context) => {
    const resBilder = await client.fetch(`*[_type in ["Bild"]]`);
    const dataBilder = await resBilder;

    const resAkademie = await client.fetch(`*[_type in ["akademie"]]`);
    const dataAkademie = await resAkademie.sort((a, b) => {
        const aMonth = Number(a.datum.split(".")[1]);
        const bMonth = Number(b.datum.split(".")[1]);
        return aMonth - bMonth;
    });

    const resChristine = await client.fetch(`*[_type in ["christine"]]`);
    const dataChristine = await resChristine;

    const resBlog = await client.fetch(`*[_type == "blogPost"] {
        title,
        slug,
        body,
        date,
        featuredImage,
        author-> {
          name,
          email,
          bio,
          "avatarUrl": avatar.asset->url
        }
      }`);
    const dataBlog = await resBlog;

    return {
        props: {
            dataBilder,
            dataAkademie,
            dataChristine,
            dataBlog,
        },
        revalidate: 1, // 10 seconds
    };
};

import Head from "next/head";
import { useState, useEffect } from "react";

//SANITY
import client from "../client";

import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";

//COMPS
import { FullHeightHero } from "../components/Hero";
import { MasonryGrid } from "../components/imageGrid";
import { RadialGradient } from "../components/layout/bg";
import { FloaterInfo } from "../components/floaters";
import Section from "../components/layout/section";
import { CenterText, BigCenterText } from "../components/textElements";
import { KursCard } from "../components/cards";
import { GhostButton } from "../components/buttons";
import { FilterBox } from "../components/filterBox";

export default function Home({ dataBilder, dataAkademie, dataChristine, dataBlog, dataLeistungen, dataSetting }) {
    useEffect(() => {
        console.log(dataBilder, dataAkademie, dataChristine, dataBlog, dataLeistungen, dataSetting);
        console.log(Array.from(new Set(dataLeistungen[0].leistungen.map((e) => e.category))));
        // AOS.init({
        //     duration: 1200,
        // });
    }, []);
    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>
            <Hero fullHeight={true} colspan="col-span-12"></Hero>
            <h1 className="font-headline text-themeGreen">Hallo ich bin ein Text</h1>
            <FloaterInfo
                onClick={(e) => {
                    console.log(e.currentTarget);
                }}
            />
            <FullHeightHero>
                <MasonryGrid images={dataBilder}></MasonryGrid>
            </FullHeightHero>
            <Section klasse="text-center">
                <CenterText
                    klasse="mb-16"
                    topLine="Unser Spektrum an"
                    headline="KURSPROGRAMM"
                    text="Unser Mal-Kursangebot ist der perfekte Ort, um Farben fließen zu lassen und kreative Visionen zum Leben zu erwecken. Ob Sie ein Anfänger oder ein fortgeschrittener Künstler sind, hier gibt es Schwerpunkte für alle Stile und Interessen.
"
                ></CenterText>
                {dataAkademie.map((e, i) => {
                    return <KursCard dataFull={dataAkademie} data={e} />;
                })}
                <div className="col-span-12 flex justify-center">
                    <GhostButton centered link="#">
                        Mehr
                    </GhostButton>
                </div>
            </Section>
            <Section klasse="text-center">
                <BigCenterText
                    text="Unser Mal-Kursangebot ist der perfekte Ort, um Farben fließen zu lassen und kreative Visionen zum Leben zu erwecken. Ob Sie ein Anfänger oder ein fortgeschrittener Künstler sind, hier gibt es Schwerpunkte für alle Stile und Interessen.
"
                />
            </Section>
            <Section klasse="text-center">
                <FilterBox data={dataLeistungen} />
            </Section>
            <RadialGradient />
        </>
    );
}

export const getStaticProps = async (context) => {
    const resBilder = await client.fetch(`*[_type in ["Bild"]]`);
    const dataBilder = await resBilder;
    // const dataBilder = await shuffleArray(resBilder);

    const resLeistungen = await client.fetch(`*[_type in ["leistungen"]]`);
    const dataLeistungen = await resLeistungen;

    const resAkademie = await client.fetch(`*[_type in ["akademie"]] `);
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

    const resSetting = await client.fetch(`
    *[_type == "settings"][0] 
  `);
    const dataSetting = await resSetting;

    return {
        props: {
            dataBilder,
            dataAkademie,
            dataChristine,
            dataBlog,
            dataLeistungen,
            dataSetting,
        },
        revalidate: 1, // 10 seconds
    };
};

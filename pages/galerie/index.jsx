import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//SANITY
import client from "../../client";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Galerie({ dataBilder, dataAkademie, dataChristine, dataBlog }) {
    useEffect(() => {
        console.log(dataBilder, dataAkademie, dataChristine, dataBlog);
        AOS.init({
            duration: 1200,
        });
    }, []);
    return <></>;
}

export const getStaticProps = async (context) => {
    const resBilder = await client.fetch(`*[_type in ["Bild"]]`);
    const dataBilder = await resBilder;

    const resAkademie = await client.fetch(`*[_type in ["akademie"]]`);
    const dataAkademie = await resAkademie;

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

import React, { useEffect } from "react";
import Image from "next/image";
import client, { getAsset } from "../../client";
import { motion } from "framer-motion";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

const ImageSite = ({ post, dataAll }) => {
    useEffect(() => {
        console.log(post);
    }, []);

    return (
        <motion.div
            layoutId={"LayoutIMG"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <Image // {...ImagePropsGallery(i)}
                src={urlFor(post.image).url()}
                layout="fill"
                objectFit="contain"
                alt="hero"
                className={`z-10 `}
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
        </motion.div>
    );
};

export default ImageSite;

export const getStaticPaths = async () => {
    const res = await client.fetch(`*[_type in ["Bild"] ]`);
    const data = await res;

    const paths = data.map((e) => {
        return {
            params: { slug: e.slug.current },
        };
    });
    return {
        paths,
        fallback: false,
        // fallback: process.env.NEXT_DEV === "true" ? false : true,
    };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const res = await client.fetch(`*[_type == "Bild" && slug.current == "${slug}"] 
    `);
    const data = await res;

    const resAll = await client.fetch(`*[_type in ["Bild"] ]`);
    const dataAll = await resAll;

    return {
        props: {
            post: data[0],
            dataAll,
        },
        revalidate: 1, // 10 seconds
    };
};

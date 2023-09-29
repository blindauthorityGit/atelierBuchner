import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const LazyLoadElement = (props) => {
    const router = useRouter();

    // ... Rest of your component logic ...

    return (
        <motion.div
            // ... Other props ...
            className={`${props.klasse} relative cursor-pointer group overflow-hidden transition-all duration-300`}
            style={{ opacity: props.isVisible ? 1 : 0 }} // Apply opacity based on visibility
        >
            {/* ... Rest of your component JSX ... */}
        </motion.div>
    );
};

export default LazyLoadElement;

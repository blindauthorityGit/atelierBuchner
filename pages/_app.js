import "../styles/globals.css";
import "../styles/animation.css";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useRouter } from "next/router";

//COMPS
import { Menu1 } from "../components/menues";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import Logo from "../assets/logoLight.svg";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        // <AnimatePresence mode="wait">
        <LayoutGroup>
            <div key={router.pathname}>
                <Menu1
                    logo={Logo.src}
                    menuItems={menuItems}
                    socialMedia={socialMedia}
                    burgerIcon={<RxHamburgerMenu />}
                    onBurgerClick={(e) => {
                        console.log(e);
                    }}
                    onClick={() => {
                        console.log("IS CLICKED");
                        setIsOpen(true);
                    }}
                ></Menu1>
                <Component {...pageProps} />
            </div>
        </LayoutGroup>
        //{" "}
        // </AnimatePresence>
    );
}

export default MyApp;

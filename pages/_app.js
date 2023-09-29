import "../styles/globals.css";
import "../styles/animation.css";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useRouter } from "next/router";

//COMPS
import { Menu1 } from "../components/menues";
import { FloaterInfo } from "../components/floaters";
import Overlay from "../components/overlay";
import { Modal } from "../components/modal";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import Logo from "../assets/logoLight.svg";

//STORE
import useStore from "../store/store"; // Import the zustand store

function MyApp({ Component, pageProps }) {
    //GLOBAL OVERLAY STATE
    const showOverlay = useStore((state) => state.showOverlay);
    const setShowOverlay = useStore((state) => state.setShowOverlay);
    //GLOBAL Modal STATE
    const openModal = useStore((state) => state.openModal);
    const isModalOpen = useStore((state) => state.isModalOpen);
    const closeModal = useStore((state) => state.closeModal);
    const modalContent = useStore((state) => state.modalContent);

    const router = useRouter();

    // Function to handle overlay click
    const handleOverlayClick = () => {
        setShowOverlay(false);
        closeModal();
    };

    return (
        // <AnimatePresence mode="wait">
        <>
            {isModalOpen ? (
                <Modal
                    isOpen={openModal}
                    onClose={() => {
                        closeModal();
                        setShowOverlay(false);

                        console.log("object");
                    }}
                >
                    {modalContent}
                </Modal>
            ) : null}
            {showOverlay && <Overlay onClick={handleOverlayClick} />} {/* Render the overlay if showOverlay is true */}
            <FloaterInfo
                onClick={(e) => {
                    console.log(e.currentTarget);
                }}
            />{" "}
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
            <LayoutGroup>
                <div key={router.pathname}>
                    <Component {...pageProps} />
                </div>
            </LayoutGroup>
        </>
        //{" "}
        // </AnimatePresence>
    );
}

export default MyApp;

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar() {
  const ulRef = useRef();
  const menuRef = useRef();
  const [isOpened, setOpened] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for modal management

  const handleMenuToggle = () => {
    const value = ulRef.current.dataset.open;
    if (value === "true") {
      ulRef.current.dataset.open = "false";
      menuRef.current.dataset.open = "false";
      setOpened(false);
    } else {
      ulRef.current.dataset.open = "true";
      menuRef.current.dataset.open = "true";
      setOpened(true);
    }
  };

  const handleCloseNavbar = () => {
    ulRef.current.dataset.open = "false";
    menuRef.current.dataset.open = "false";
    setOpened(false);
  };

  return (
    <nav className="primary-nav container">
      <div className="logo">
        <Link href={"/"}>
          <img
            className="logo-image"
            style={{ height: "80px", width: "500px" }}
            src="/logo.png"
            alt="Menu"
          />
        </Link>
      </div>

      <ul
        className="primary-navigation"
        id="primary-navigation"
        role="list"
        data-open="false"
        ref={ulRef}
      >
        <li>
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            className="register-btn"
            color={"black"}
            href="https://forms.gle/zGm1F238RdrPtKNK6"
            _hover={{ color: "#4299e1" }}
            // onClick={() => {
            //   onOpen(); // Opens the modal
            //   handleCloseNavbar(); // Closes the navbar
            // }}
          >
            Register
          </Button>
        </li>
        <li>
          <Link href="/" onClick={handleCloseNavbar}>
            About
          </Link>
        </li>
        <li>
          <Link href="/events" onClick={handleCloseNavbar}>
            Events
          </Link>
        </li>
        <li>
          <Link href="/team" onClick={handleCloseNavbar}>
            Team
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={handleCloseNavbar}>
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="menu-icon"
        id="menu"
        ref={menuRef}
        data-open="false"
        onClick={handleMenuToggle}
      >
        {!isOpened && (
          <Image
            src={"/icon-menu.svg"}
            width={32}
            height={31}
            alt="Menu Icon for Opening the menu"
          />
        )}
        {isOpened && (
          <Image
            src={"/icon-menu-close.svg"}
            width={32}
            height={31}
            alt="Menu Icon for Closing the menu"
          />
        )}
      </button>

      {/* Modal for Registration */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
        <ModalOverlay />
        <ModalContent
          bg="white"
          borderRadius="2xl"
          boxShadow="2xl"
          color="black"
          p={6}
          textAlign="center"
          transform="translateY(-20px)"
          animation="ease-in 0.3s"
        >
          <ModalCloseButton color="black" _hover={{ color: "blue.500" }} />
          <ModalBody fontSize="lg" py={6}>
            <p>
              🚀 <strong>Registration will be starting soon!</strong> Stay tuned
              for updates.
            </p>
            <Button
              mt={4}
              size="md"
              bg="blue.500"
              _hover={{
                bg: "blue.600",
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
              color="white"
              rounded="full"
              onClick={onClose}
            >
              Got it!
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
}

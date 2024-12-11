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
            // colorScheme={"blue"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            className='register-btn'
            color={"black"}
            _hover={{ color: "" }}
            // leftIcon={< h={4} w={4} color={"gray.300"} />}
            as={Link}
            href='https://forms.gle/zGm1F238RdrPtKNK6'
          >
            {/*  </Button> */}
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
    </nav>
  );
}

import { NavbarContainer } from "@/src/styles/Navbar";
import { Globe, HouseLine, Notebook, User } from "@phosphor-icons/react";
import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { PortfolioContext } from "@/src/context/PortfolioContext";

export default function Navbar() {
  const { handleToggle } = useContext(PortfolioContext)!;
  const { locale } = useContext(PortfolioContext)!;
  const LanguageLabel = locale === "en" ? "Greek" : "English";
  return (
    <NavbarContainer>
      <div>
        <Link href="/">
          <Tooltip
            label="Home"
            aria-label="Home"
            bg={"transparent"}
            border={"none"}
            boxShadow={"none"}
          >
            <HouseLine size={27} weight="light" cursor={"pointer"} />
          </Tooltip>
        </Link>
        <Link href="/about">
          <Tooltip
            label="About"
            aria-label="About"
            color="white"
            bg={"transparent"}
            border={"none"}
            boxShadow={"none"}
          >
            <User size={27} weight="light" cursor={"pointer"} />
          </Tooltip>
        </Link>
        <Link href="/jobs">
          <Tooltip
            label="Jobs"
            aria-label="Jobs"
            color="white"
            bg={"transparent"}
            border={"none"}
            boxShadow={"none"}
          >
            <Notebook size={27} weight="light" cursor={"pointer"} />
          </Tooltip>
        </Link>
        <Tooltip
          label={`Translate to  ${LanguageLabel}`}
          aria-label="Translate"
          color="white"
          bg={"#626c36"}
          border={"none"}
          boxShadow={"none"}
        >
          <Globe
            onClick={() => handleToggle()}
            size={27}
            weight="light"
            cursor={"pointer"}
            color="white"
          />
        </Tooltip>
      </div>
    </NavbarContainer>
  );
}

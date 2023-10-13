import { NavbarContainer } from "@/src/styles/Navbar";
import {
  GithubLogo,
  HouseLine,
  LinkedinLogo,
  Notebook,
  SuitcaseSimple,
  User,
} from "@phosphor-icons/react";
import { Tooltip, useStyleConfig } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
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
        <Link href="https://github.com/diegobaena89">
          <Tooltip
            label="Github"
            aria-label="Github"
            color="white"
            bg={"transparent"}
            border={"none"}
            boxShadow={"none"}
          >
            <GithubLogo size={27} weight="light" cursor={"pointer"} />
          </Tooltip>
        </Link>
        <Link href="https://www.linkedin.com/in/diegobaena89/">
          <Tooltip
            label="Linkedin"
            aria-label="Linkedin"
            color="white"
            bg={"transparent"}
            border={"none"}
            boxShadow={"none"}
          >
            <LinkedinLogo size={27} weight="light" cursor={"pointer"} />
          </Tooltip>
        </Link>
      </div>
    </NavbarContainer>
  );
}

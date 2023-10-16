import { NavbarContainer } from "@/src/styles/Navbar";
import { HouseLine, Notebook, User } from "@phosphor-icons/react";
import { Tooltip } from "@chakra-ui/react";
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
      </div>
    </NavbarContainer>
  );
}

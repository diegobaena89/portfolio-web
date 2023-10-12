import { NavbarContainer } from "@/src/styles/Navbar";
import {
  GithubLogo,
  HouseLine,
  LinkedinLogo,
  Notebook,
  SuitcaseSimple,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <Link href="/">
          <HouseLine size={27} weight="light" cursor={"pointer"} />
        </Link>
        <Link href="/techs">
          <SuitcaseSimple size={27} weight="light" cursor={"pointer"} />
        </Link>
        <Link href="/jobs">
          <Notebook size={27} weight="light" cursor={"pointer"} />
        </Link>
        <GithubLogo size={27} weight="light" cursor={"pointer"} />
        <LinkedinLogo size={27} weight="light" cursor={"pointer"} />
      </div>
    </NavbarContainer>
  );
}

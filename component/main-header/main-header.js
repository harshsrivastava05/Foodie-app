import Link from "next/link";
import logoimage from "@/assets/logo.png";
import classes from "./main.header.module.css"
import Image from "next/image";
import Mainheaderbackground from "./main-header-background";

export default function Mainheader() {
  return (
    <div>
   <Mainheaderbackground />
    <header className={classes.header} >
      <Link className={classes.logo} href="/">
        <Image src={logoimage} alt="a plate with food on it" priority />
        Foodie
      </Link>

      <nav className={classes.nav}> 
        <ul>
          <li>
            <Link href="/meals">Browse meals</Link>
            <Link href="/community">foodies comunity</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

import { Nav } from "./Nav";
import logoImg from "../Images/Logo.svg";

export const Header = () => {
    return <header>
        <img src={logoImg} alt="little-lemon-logo"></img>
        <Nav></Nav>
    </header>
}
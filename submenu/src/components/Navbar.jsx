import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const { openSidebar, setPageId } = useGlobalContext();
    const handleSubmenu = (e) => {
        //console.log(e.target);
        if (!e.target.classList.contains('nav-link')) {
            setPageId(null);
        }
    };

    return (
        <nav 
            onMouseOver={handleSubmenu}
            className="h-[5rem] flex items-center justify-center">
            <div className="nav-center">
                <h3 className="normal-case text-white text-[2rem] tracking-[3px] font-bold">strapi</h3>
                <button 
                    className="toggle-btn"
                    onClick={openSidebar}
                >
                    <FaBars className="mx-auto" />
                </button>
                <NavLinks />
            </div>
        </nav>
    )
};

export default Navbar;
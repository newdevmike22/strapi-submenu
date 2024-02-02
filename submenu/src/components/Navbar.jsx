import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const Navbar = () => {
    const { openSidebar } = useGlobalContext();

    return (
        <nav className="h-[5rem] flex items-center justify-center">
            <div className="w-[90vw] max-w-[1120px] flex justify-between items-center">
                <h3 className="normal-case text-white text-[2rem] tracking-[3px] font-bold">strapi</h3>
                <button 
                    className="w-8 h-8 bg-white text-[#4338ca] rounded-md border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-110"
                    onClick={openSidebar}
                >
                    <FaBars className="mx-auto" />
                </button>
                {/* nav links */}
            </div>
        </nav>
    )
};

export default Navbar;
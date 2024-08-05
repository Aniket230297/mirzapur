import "./style.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiTelevisionDuotone } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = ()=>{

    return (
        <>     
        <div className="navbarComponent"> 
            <nav>
            <IoIosArrowRoundBack style={{color:'white'}} size={50} className="ioarrowback" />
                <ul>               
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <PiTelevisionDuotone style={{color:'red'}} size={50} />
                    <li>Movies</li>
                    <li>Recently Added</li>
                </ul>
                <IoMenuOutline style={{color:'white'}} size={50} />
            </nav>
        </div>
        </>
    )
}

export default Navbar;
import "../Styles/Navigation.css"
import { BsGlobe } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
 
function Navigation(){
    return(
        <nav className="Nav">
        <div className="logoDiv">
           <img src="logo.png" alt=""/> 
           <p>Velionex</p>
        </div>
        <div className="Lists">
            <ul>
                <li>Start</li>
                <li>Wireless</li>
                <li>Internet</li>
                <li>Directv</li>
                <li>About us</li>
                 <li><BsGlobe/> <FaAngleDown/></li>
              </ul>
        </div>
        <div className="ContactDiv">
            <p>Call us +109 5000 2000</p>
        </div>
        </nav>
    )
}
export default Navigation
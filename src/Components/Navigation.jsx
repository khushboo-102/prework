import "../Styles/Navigation.css"
 
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
                <li><img src="image.png" alt="" /></li>
              </ul>
        </div>
        <div className="ContactDiv">
            <p>Call us +109 5000 2000</p>
        </div>
        </nav>
    )
}
export default Navigation
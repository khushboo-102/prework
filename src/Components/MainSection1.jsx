import "../Styles/MainSection1.css"
import { FiPlusCircle } from "react-icons/fi";
function MainSection1() {
    return (
        <main className="main">
            <div className="mainDiv">
                <p>Flexible everyday</p>
                <p>At Velionex, we connect you with the provider that best fits your needs.Wireless services, high-speed internet, and premium entertainment – simple, seamless, and tailored for your everyday life.</p>

                < hr className="linDiv" />
                <div className="linePara">
                    <p>Wireless</p>
                    <FiPlusCircle className="plusCircle" />
                </div>
                <hr />
                <div className="linePara">
                    <p>Internet</p>
                    <FiPlusCircle className="plusCircle" />
                </div>
                <hr />
                <div className="linePara">
                    <p>Directv</p>
                    <FiPlusCircle className="plusCircle" />
                </div>
                <hr />
            </div>
            <div className="mainImg">
                <img src="main1.png" alt="" />
            </div>
        </main>
    )
}
export default MainSection1
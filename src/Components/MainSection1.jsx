import "../Styles/MainSection1.css"
import { FiPlusCircle } from "react-icons/fi";
function MainSection1() {
    return (
        <main className="main">
            <section className="mainDiv">
                <div className="firstPara">
                    <p className="tittle">Flexible everyday</p>
                    <p className="intro">At Velionex, we connect you with the provider that best fits your needs.Wireless services, high-speed internet, and premium entertainment – simple, seamless, and tailored for your everyday life.</p>
                </div>

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
            </section>
            <section className="mainImg">
                <img src="main1.png" alt="" />
            </section>
        </main>
    )
}
export default MainSection1
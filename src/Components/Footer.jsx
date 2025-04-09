import "../Styles/Footer.css"
function Footer(){
    return(
        <footer>
            <div className="logoDiv">
                <img src="footerLogo.png" alt="" />
                <p>Velionex</p>
            </div>
             <div className="footerDiv1">
                <section>
                    <p>Products</p>
                    <hr/>
                    <p>Wireless</p>
                    <p>Internet</p>
                    <p>Directv</p>
                </section>
                <section>
                    <p>Company</p>
                    <hr />
                    <p>About us</p>
                    <p>Contact</p>
                </section>
            </div>
            <div className="footerDiv2">
                <section>
                    <p>Follow us</p>
                    <hr/>
                    <p>Instagram</p>
                    <p>News letter</p>
                </section>
                <section>
                    <p>Velionex is a trusted provider with 20+ years of experience of providing tailored internet and mobile services. As an authorized partner and reseller for renowned brands such as AT&T, Frontier Communications, and Kinetic/Windstream, we provide customers with a variety of subscription options designed to meet their unique needs.z</p>
                </section>
            </div>

            <div className="footerDiv3">
                <p className="copyrightText">All rights reserved © 2024 Velionex</p>
                <p className="privacyTittle">Privacy Policy</p>
                <p className="CookieTittle">Cookie Policy</p>
            </div>
          </footer>
    )
}

export default Footer
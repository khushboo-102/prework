import "../Styles/MainSection3.css"
function MainSection3({ image, firstpara, heading, secondpara, lists, button }) {
    return (
        <main >
            <section className="section">
                <img src={image} alt="" />
                <p className="subtittle">{firstpara}</p>
                <p>{heading}</p>
                <p>{secondpara}</p>
                <ul>
                    {
                        lists.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                <button>{button}</button>
            </section>
        </main>
    )
}
export default MainSection3
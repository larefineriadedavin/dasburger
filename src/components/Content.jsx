// import myImage from '../assets/images/frame.png'


export default function Content() {
    return (
        <section className="content">
            <ul className="content--menu">
                <li>HAMBURGUESAS</li>
                <li>PAPAS</li>
                <li>PERROS CALIENTES</li>
            </ul>
            <div className="menu">
                <div className='menu--card'>
                    <img></img>
                    <h3 className="menu--title">HAMBURGUESA CLASICA</h3>
                    <p></p>
                </div>
                <div className='menu--card'>
                    <img></img>
                    <h3 className="menu--title">PAPAS A LA FRANCESA</h3>
                    <p></p>
                </div>
                <div className='menu--card'>
                    <img></img>
                    <h3 className="menu--title">PERRO COMPLETO</h3>
                    <p></p>
                </div>
            </div>
        </section>
    )
}

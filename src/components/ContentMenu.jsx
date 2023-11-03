import Card from "./Card"
import datamenu from "../datamenu"


export default function ContentMenu() {
    const item = datamenu.map((newitem) => {
        return (
            <Card
                key={newitem.id}
                imageSrc={newitem.cardImage}
                title={newitem.title}
                text={newitem.text}
            />
        )
    })

    return (
        <section className="content">
            <ul className="content--menu">
                <li>HAMBURGUESAS</li>
                <li>PAPAS</li>
                <li>PERROS CALIENTES</li>
            </ul>
            <section className="cards">
                {item}
            </section>
        </section>
    )
}


/* <div className="menu">
    <div className='menu--card'>
        <img></img>
        <h3 className="menu--title">HAMBURGUESA CLASICA</h3>
        <p className="menu--text">Carne picada de ternera, pan humedecido en leche, huevo, tocineta de cerdo y otros condimentos constituyen la base de un excelente sabor.</p>
    </div>
    <div className='menu--card2'>
        <img></img>
        <h3 className="menu--title">PAPAS A LA FRANCESA</h3>
        <p className="menu--text">Nuestras ricas papas a la francesa con lemon pepper son las preferidas por nuestra clientela que les fascina el sabor y la mezcla de limon.</p>
    </div>
    <div className='menu--card3'>
        <img></img>
        <h3 className="menu--title">PERRO COMPLETO</h3>
        <p className="menu--text">Salchicha Frankfurt, dos lonchas de queso, dos hojas de lechuga, un cuarto de tomate, un cuarto de cebolla morada y un cuarto de aguacate, media lima, sal, aceite de oliva y queso parmesano rallado.</p>
    </div>
</div> */
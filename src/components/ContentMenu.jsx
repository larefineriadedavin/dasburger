import Card from "./Card"
import datamenu from "../datamenu"


export default function ContentMenu() {
    const item = datamenu.map((newitem) => {
        return (
            <Card
                key={newitem.id}
                cardImage={newitem.cardImage}
                imageAlt={newitem.imageAlt}
                title={newitem.title}
                text={newitem.title}
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



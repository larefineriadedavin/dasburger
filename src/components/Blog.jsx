

export default function Blog() {
    return (
        <div className="blog">
            <div className="blog--title">
                <h3>LO ÚLTIMO</h3>
                <img src='arrow-right-solid.svg' className="r--arrow"></img>
                <img src='arrow-left-solid.svg' className="l--arrow"></img>
            </div>
            <div className="card--blog">
                <h3>GOOGLE MAPS</h3>
                <p>Me gusta muchos las
                hamburguesas de Dasburger
                y el gran sabor de las papas
                100% lo recomiendo.</p>
                <img className="card--image"></img>
            </div>
            <div className="card--blog2">
                <h3>RAPPI</h3>
                <p>Una vez vine con mi mejor amiga, de verdad que el sitio era de su agrado, siempre me lo recomendó, ahora veo porque le gustaba tanto.</p>
                <img className="card--image2"></img>
            </div>
            
        </div>
    )
}
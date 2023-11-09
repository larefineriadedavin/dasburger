import BlogCard from "./BlogCard"
import datablog from "../datablog"

export default function Blog() {
    const review = datablog.map((newreview)=> {
        return (
            <BlogCard 
                key={newreview.id}
                {...newreview}
            />
        )
    })

    return (
        <div className="blog">
            <section>        
                <h3 className="blog--title">LO ÚLTIMO</h3>
                <img src='right.svg' className="r--arrow"></img>
                <img src='left.svg' className="l--arrow"></img>
            </section>           
            <section className="blog--cards">
                {review}
            </section>            
            <h3 className="blog--read">LEER MAS</h3>
        </div>
    )
}
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
            <div className="blog--title">
                <h3>LO ÚLTIMO</h3>
                <img src='right.svg' className="r--arrow"></img>
                <img src='left.svg' className="l--arrow"></img>
            </div>
            <div className="blog--cards">
                {review}
            </div>
            
            <h3 className="blog--read">LEER MAS</h3>
        </div>
    )
}
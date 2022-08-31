import { carParts } from "../../CarPartsData";

//Dynamically renders list of car parts category names with images.
export default function CarPartsDetail(){
 
    return(
        <>
        <div className="carPart">
            <h2 className="h2CarPart">Select A Category</h2>
            <hr></hr>
            {carParts.map((part, i) => {
                
                return(
                    <div key={i}>
                        <section className="carPartDetail">
                            <h3>{part.partName}</h3>
                            <img clasname='carPartImage' src={part.partImage} />
                            <p>See More</p>
                        </section>
                        </div>
                )
            })}
        </div>
        </>
    )
}
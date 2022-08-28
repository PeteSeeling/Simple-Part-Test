import { carParts } from "../../CarPartsData";


//Dynamically renders list of car parts category names with images.
export default function CarPartsDetail(){
    console.log({ carParts })
    return(
        <>
        <div>
            {carParts.map((part, i) => {
                return(
                    <div key={i}>
                        <section>
                            <h3>{part.partName}</h3>
                            <img src={part.partImage} />
                            <p>See More</p>
                        </section>
                        </div>
                )
            })}
        </div>
        </>
    )
}
import { carParts } from "../../CarPartsData";

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
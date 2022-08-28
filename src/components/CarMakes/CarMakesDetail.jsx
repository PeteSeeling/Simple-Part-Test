import { carBrands } from "../../CarMakesData";

export default function CarMakesDetail(){
    console.log({ carBrands })
    return(
        <>
        <div>
         {carBrands.map((make, i) => {
             return(
                 <div key={i}>
                     <h2>{make.brand}</h2>
                     <img src={make.image_url} />
                     </div>
             )
         })}
        </div>
        
        </>
    )
}


import { carBrands } from "../../CarMakesData";

export default function CarMakesDetail(){
   
    return(
        <>
        <div>
         {carBrands.map((make, i) => {
             return(
                 <div key={i}>
                     <section>
                     <h2>{make.brand}</h2>
                     <img src={make.image_url} />
                     </section>
                     </div>
             )
         })}
        </div>
        </>
    )
}


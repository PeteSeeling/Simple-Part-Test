import { carBrands } from "../../CarMakesData";

//Dynmaically renders car brands with images and brand name.
export default function CarMakesDetail(){
   
    return(
        <>
        <h2>Select A Make</h2>
        <hr></hr>

        <div className="carMake">
         {carBrands.map((make, i) => {
             return(
                 <div className="carMakeDetail" key={i}>
                     <section>
                     <h3 className="carMake">{make.brand}</h3>
                     <img src={make.image_url} />
                     </section>
                     </div>
             )
         })}
        </div>
        </>
    )
}


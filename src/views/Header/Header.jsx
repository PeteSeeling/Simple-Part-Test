

export default function Header(){

    return(
        <>
        <div>
        <section>
        <span>
            <p>Browse our complete catalog of OEM and licensed British heritage parts for your classic British automobile. | Kalam</p>
        </span>
        </section>

        <section>
            <h2>English Parts.com</h2>
            <span>
                <img src={require('../../../public/images/icons/header-location.png')} />
                <p>5850 Stadium Dr, Kalamazoo, MI 49009</p>
                <img src={require('../../../public/images/icons/header-phone.png')} />
                <p>866.467.1776</p>
            </span>
        </section>

        <section>
            <span>
                <h4>Parts</h4>
                <img src={require('../../../public/images/icons/default/arrow-down.png')} />
                <h4> About Us</h4>
                <img alt='arrow-right' src ={require('../../../public/images/icons/arrow-right.png')}/>
            </span>
        </section>

        <section>
            <span>
                <input placeholder='Search by  Keywords, Part Numbers or Vin'>
                </input>
                <button>GO</button>
                <h4>Select Your Vehicle</h4>
                <img src={require('../../../public/images/parts/tiles/austin-healey.png')} />
                <img src={require('../../../public/images/icons/cart-empty.png')} />
            </span>
        </section>
        </div>
        </>
    )
}
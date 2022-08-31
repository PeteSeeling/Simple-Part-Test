import styles from '../../styles.less'

export default function Header(){

    return(
        <>
        <div className='header'>
        <section>
        <span className='headerTop' >
            <p>Browse our complete catalog of OEM and licensed British heritage parts for your classic British automobile. | Kalam</p>
        </span>
        </section>
<div className='headerBody'>
        <section className='headerBodyUpper'>
        <img className='britishFlag' src={require('../../../public/images/icons/british-flag.png')} />
            <h2 >English Parts.com</h2>
            <div className='partsMenu'>

            <button className='partsButton'>Parts
                <img src={require('../../../public/images/icons/default/arrow-down.png')} /></button>

               <button className='partsButton'> About Us
                <img alt='arrow-right' src ={require('../../../public/images/icons/arrow-right.png')}/>
                </button>
            </div>
        </section>

        <section className='headerLower'>
            <span className='row'>

                <button className='iconButton'>
                   <img classname='icon' src={require('../../../public/images/icons/header-location.png')} />
                <p>5850 Stadium Dr, Kalamazoo, MI 49009</p>
                </button>

                <button className='iconButton'>
                <img classname='icon' src={require('../../../public/images/icons/header-phone.png')} />
                <p>866.467.1776</p>
                </button>

                <button className='iconButton'>
                   <img classname='icon' src={require('../../../public/images/icons/header-email.png')} />
                <p>sales@englishparts.com</p>
                </button>
            </span>
        </section>
        </div>

        <section className='headerSearch'>
            <span>
                <input className='input' placeholder='Search by  Keywords, Part Numbers or Vin'>
                </input>
                <button className='searchButton'>GO</button>
                <h4>Select Your Vehicle</h4>
                <img src={require('../../../public/images/icons/cart-empty.png')} />
            </span>
        </section>
        </div>
        </>
    )
}
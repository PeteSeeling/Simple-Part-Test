
//Footer with list and logo image at bottom.
export default function Footer(){
    return(
        <div>
            <section>
                <h4>About</h4>
                <ul>
                    <p></p>
                    <p>Accepted Payment</p>
                    <p>Contact Us</p>
                    <p>Policies</p>
                    <p>Refunds</p>
                    <p>Returns</p>
                </ul>
            </section>

            <section>
                <h4>Legal</h4>
                <ul>
                    <p>Policies</p>
                </ul>
            </section>

            <section>
                <h4>Links</h4>
                <ul>
                <p>My Information</p>
                <p>Testimonials</p>
                </ul>
            </section>

            <section>
                <p>
                While every reasonable effort is made to ensure the accuracy of this data, we are not responsible for any errors or omissions contained on these pages. Please verify any information in question with a sales representative.
                </p>
            </section>

            <section>
                <p>© 2021 EnglishParts.com</p>
            </section>

            <section>
                <img src={require('../../../public/images/logos/simplepart-logo-dark.png')} />
            </section>

        </div>
    )
}
import 'contact.css'

function Contact(){
    return(
        <>
        <div>
        <div className="container">
            <div className="left">
            <img src="img/Logo.png" alt="logo" />
            <h3>Paras Bagiak</h3>
            </div>
            <div className="navbar">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/product.html">Products</a></li>
                <li><a href="/contact.html">Contact</a></li>
                <li><a href="/about.html">About Us</a></li>
                <li><a href="/login.html">Sign In</a></li>
                <button onclick="window.location.href='/register.html'">
                Sign Up
                </button>
            </ul>
            </div>
        </div>
        <div className="content">
            <h1>
            Contact Us
            </h1>
            <p>Questions? Comments? 
            <br />
            <br />
            Give us a shout at <strong>parasbagiak@gmail.com</strong>
            <br />
            <br />
            Wanna carry us? Want us stocked in your office? 
            <br />
            <br />
            Lets do it! <strong>salesparasbagiak@gmail.com</strong></p>
            <br />
            <br />
            Follow us at <strong>@parasbagiak</strong>
        </div>
        <div className="footer">
            <div className="left">
            <p>© 2022 Copyright Paras Bagiak</p>
            </div>
            <div className="navbar">
            <ul>
                <li><img src="img/bri.png" alt /></li>
                <li><img src="img/dana.jpeg" alt /></li>
                <li><img src="img/ovo.jpg" alt /></li>
            </ul>
            </div>
        </div>
        </div>

        </>
    )
}

export default Contact;
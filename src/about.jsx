function About(){
    return (
        <>
        <div>
        <div className="container">
            <div className="left">
            <img src="/Logo.png" alt="logo" />
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
        <div className="container">
            <div className="content">
            <img src="img/Slider.png" alt />
            <p>Paras bagiak merupakan platform yang bekerja dibidang penjualan kue khas tradisional,jenang khas daerah dan juga kain batik khas daerah yang beraneka ragam serta juga sudah berbasis android.
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, tempore provident rem possimus in dolor voluptatibus temporibus impedit sequi totam. Laudantium, debitis nisi odit porro id nobis corporis necessitatibus doloribus!</p>
            </div>
        </div>
        <div className="footer">
            <div className="left">
            <p>© 2022 Copyright Paras Bagiak</p>
            </div>
            <div className="navbar">
            <ul>
                <li><img src="/bri.png" alt /></li>
                <li><img src="/dana.jpeg" alt /></li>
                <li><img src="/ovo.jpg" alt /></li>
            </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default About;
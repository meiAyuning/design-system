import '/product.css'

function Product() {
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
                <li><a href="/index">Home</a></li>
                <li><a href="/product">Products</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/login">Sign In</a></li>
                <button onclick="window.location.href='/register'">
                Sign Up
                </button>
            </ul>
            </div>
        </div>
        <div className="main">
            <h1>Our Products</h1>
            <ul className="cards">
            <li className="cards_item">
                <div className="card">
                <div className="card_image"><img src="/kue1.jpg" /></div>
                <div className="card_content">
                    <div className="card_wrapper_title"><h2 className="card_title">Kue Klemben</h2></div>
                    <button className="btn card_btn">Buy Now</button>
                </div>
                </div>
            </li>
            <li className="cards_item">
                <div className="card">
                <div className="card_image"><img src="/batik2.jpg" /></div>
                <div className="card_content">
                    <div className="card_wrapper_title"><h2 className="card_title">Batik Kangkung Setingkes</h2></div>
                    <button className="btn card_btn">Buy Now</button>
                </div>
                </div>
            </li>
            <li className="cards_item">
                <div className="card">
                <div className="card_image"><img src="/madu mongso.jpg" /></div>
                <div className="card_content">
                    <div className="card_wrapper_title"><h2 className="card_title">Jenang Madu Mongso</h2></div>
                    <button className="btn card_btn">Buy Now</button>
                </div>
                </div>
            </li>
            <li className="cards_item">
                <div className="card">
                <div className="card_image"><img src="/kue2.jpg" /></div>
                <div className="card_content">
                    <div className="card_wrapper_title"><h2 className="card_title">Kue Untir - Untir</h2></div>
                    <button className="btn card_btn">Buy Now</button>
                </div>
                </div>
            </li>
            <li className="cards_item">
                <div className="card">
                <div className="card_image"><img src="/batik.jpg" /></div>
                <div className="card_content">
                    <div className="card_wrapper_title"><h2 className="card_title">Batik Gajah Oling</h2></div>
                    <button className="btn card_btn">Buy Now</button>
                </div>
                </div>
            </li>
            <li className="cards_item">
                <div className="card">
                <div className="card_image"><img src="/kue.jpg" /></div>
                <div className="card_content">
                    <div className="card_wrapper_title"><h2 className="card_title">Jenang Dodol Pandan Kukus</h2></div>
                    <button className="btn card_btn">Buy Now</button>
                </div>
                </div>
            </li>
            </ul>
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

export default Product;
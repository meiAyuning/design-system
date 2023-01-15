import 'register.css';

function Register(){
    return(
        <>
        <div className="kotak_login">
        {/* <img src="img/bg.png" alt=""> */}
        <h1 className="tulisan_login">Register</h1>
        <form>
            <label>Username</label>
            <input type="text" name="username" className="form_login" placeholder="Username Anda" />
            <label>Email</label>
            <input type="email" name="email" className="form_login" placeholder="Email Anda" />
            <label>Password</label>
            <input type="password" name="password" className="form_login" placeholder="Password .." />
            <label>Verifikasi Password</label>
            <input type="password" name="password" className="form_login" placeholder="Password .." />
            <input type="submit" className="tombol_login" defaultValue="Register" />
            <br />
            <br />
            <center>
            <a className="link" href="index.html">Login</a>
            </center>
        </form>
        </div>
        </>
    )
}

export default Register;
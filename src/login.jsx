import '/login.css';


function Login(){
    return(
        <>
        <div className="kotak_login">
        {/* <img src="img/bg.png" alt=""> */}
        <h1 className="tulisan_login">LOGIN</h1>
        <form>
            <label>Username</label>
            <input type="text" name="username" className="form_login" placeholder="Username atau email .." />
            <label>Password</label>
            <input type="text" name="password" className="form_login" placeholder="Password .." />
            <input type="submit" className="tombol_login" defaultValue="LOGIN" />
            <br />
            <br />
            <center>
            <a className="link" href="/register">Register</a>
            </center>
        </form>
        </div>

        </>
    )
}

export default Login;
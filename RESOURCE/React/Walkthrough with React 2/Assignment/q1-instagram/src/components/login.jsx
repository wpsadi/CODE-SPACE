import "./login.css"
import { IoLogoInstagram } from "react-icons/io";

function Page({action,setAction}) {
    return (
        <div id="login-box">
            <div id="box">
                <IoLogoInstagram id="logo" />
                <form>
                    {
                        action != "login" && (<><input type="text" name="user" placeholder="Mobile Number or email" />
                        <br /><br />
                        <input type="text"  name="user" placeholder="Full Name" />
                        <br /><br /></>)
                    }
                    
                    <input type="text" id="login-user" name="user" placeholder="Phone Number, Username, email" />
                    <br /><br />
                    <input type="password" name="pass" id="login-pass" placeholder="Password" />
                    <br /><br />
                    
                    {
                        action != "login" && (<>
                        <button type="button" className="submit">Sign up</button>
                        <div id="chnge-signup">Have an account? <span className="wtd" onClick={()=>{setAction("login")}}>Log in</span></div>
                        </>)

                    }

{
                        action == "login" && (<>
                        <button type="button" className="submit">Sign in</button>
                        <div id="chnge-login">Don't have account? <span className="wtd" onClick={()=>{setAction("signup")}}>Sign up</span></div>
                        </>)

                    }


                </form>
            </div>

        </div>
    )
}

export default Page
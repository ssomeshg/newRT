import Button from "./Button"

function Navbar() {
    return <div className="navbar" style={{backgroundColor:"purple",color:"white",display:"flex",alignItems:"center" ,justifyContent:"space-between", padding:"0px 10px"}}>
        <h1>LOGO</h1>
        <div>
            <ul className="" style={{display:"flex",alignItems:"center",gap:"40px"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <Button></Button>
    </div>
}

export default Navbar

function About() {

    const arr = ["apple", "orange", "pinapple", "grapes","Kalai"]


    return <div style={{ textAlign: "center" }}>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptatibus tempore quod dolor eos? Culpa deleniti molestias voluptatem officiis voluptas corporis fugit, officia quasi ut dolor cupiditate. Ratione, dolorem ab!</p>

        <ul>
            {
                arr.map(function(items){
                    return <li>{items}</li>
                })
            }
        </ul>
    </div>
}

export default About
import Foto01 from "../assets/img/foto1.jpeg"

export default function Card(){
    return(
        <div>
            <h2>Produtos 01</h2>
            <img src="{Foto01}" alt="Paisagem"  width={200} height={"auto"}/>
            <p>joia</p>
            <p>eduardo masquence</p>
        </div>
    )
}
import { Git } from "../icons/Git";
import { Linkedin } from "../icons/Linkedin";
import { Renders } from "../icons/Renders";

export const MainSection = () =>{
    return(
        
        <main className="principal-main-csv">
            <h1>Hola, Mi nombre es Saul Ricaño</h1>
            <h2>Desarrollador Web Full Stack con enfoque al uso de 3D</h2>
            <ul className="list-main-csv">
                <li><a href="https://www.linkedin.com/in/saul-ricaño-monroy-48624a2b6/" target="_blank">
                    <Linkedin/>Linkedin</a></li>

                <li><a href="https://github.com/SaulRim" target="_blank">
                    <Git/> GigHub</a></li>

                <li><a href="https://saulrmart.artstation.com" target="_blank">
                    <Renders/> Renders</a></li>
            </ul>
        </main>
    );
}
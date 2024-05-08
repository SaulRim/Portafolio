import { Instagram } from "../icons/Instagram";
import { Linkedin } from "../icons/Linkedin";

export const Contact = () =>{
    return(
        <section className="section-contact" id="contact">
            <div>
                <p><strong>Nombre:</strong> Saul Ricaño Monroy</p>
                <p><strong>Correo:</strong> saulrimso@gmail.com</p>
                <p><strong>Educación:</strong> Instituto Tecnologico de Pachuca</p>
                <p>Ingeniero en Sistemas computacionales</p>
                <p>Mexico. Pachuca</p>
                <p>Para conocer sobre más licencias y trabajos</p>
                <a href="https://www.linkedin.com/in/saul-ricaño-monroy-48624a2b6/details/certifications/" target="_blank">
                    <Linkedin/></a>
                <a href="https://www.instagram.com/artista_walker/" target="_blank">
                    <Instagram/></a>
                
            </div>
        </section>
    );
}
import { Aseprite } from "../icons/Aseprite";
import { C3 } from "../icons/C3";
import { Css } from "../icons/Css";
import { Express } from "../icons/Express";
import { Git } from "../icons/Git";
import { Html } from "../icons/Html";
import { Javascript } from "../icons/Javascript";
import { Mysql } from "../icons/Mysql";
import { Node } from "../icons/Node";
import { Php } from "../icons/Php";
import { React } from "../icons/React";
import { Renders } from "../icons/Renders";
import { Unity } from "../icons/Unity";

export const Skills= () =>{
    return(
        <section className="section-skill">
            <h2 className="skills">Habilidades</h2>
            <ol>
                <li>
                    <Javascript/>
                    <div>
                        <p>Javascript</p>
                        <span>Lenguaje principal utilizado en la actualizad</span>
                    </div>
                </li>
                <li>
                    <React/>
                    <div>
                        <p>React</p>
                        <span>Complemento FrontEnd para Web</span>
                    </div>
                </li>
                <li>
                    <Css/>
                    <div>
                        <p>CSS</p>
                        <span>Estilos, manejo vanilla</span>
                    </div>
                </li>
                <li>
                    <Html/>
                    <div>
                        <p>HTML</p>
                        <span>Uso de etiquetas correspondientes</span>
                    </div>
                </li>
                <li>
                    <Renders/>
                    <div>
                        <p>Blender</p>
                        <span>Creación y modelado de objetos y animaciones low y high poly</span>
                    </div>
                </li>
                <li>
                    <Unity/>
                    <div>
                        <p>Unity</p>
                        <span>Creación de aplicaciones basicas. Uso de herramienta general.</span>
                    </div>
                </li>
                <li>
                    <Aseprite/>
                    <div>
                        <p>Aseprite</p>
                        <span>Diseños 2D con el estilo PixelArt</span>
                    </div>
                </li>
                <li>
                    <Git/>
                    <div>
                        <p>Git y Github</p>
                        <span>Para trabajo colaborativo y almacenaje de proyectos</span>
                    </div>
                </li>
                <li>
                    <Mysql/>
                    <div>
                        <p>Mysql</p>
                        <span>Majedo de base de datos relacionales con la sintaxis SQL</span>
                    </div>
                </li>
                <li>
                    <C3/>
                    <div>
                        <p>C#</p>
                        <span>Para manerjo de .Net y Unity</span>
                    </div>
                </li>
                <li>
                    <Php/>
                    <div>
                        <p>PHP</p>
                        <span>Uso para backend y aplicaciones web generales.</span>
                    </div>
                </li>
                <li>
                    <Node/>
                    <div>
                        <p>Node js</p>
                        <span>Uso para backend y complementos de proyectos web</span>
                    </div>
                </li>
                <li>
                    <Express/>
                    <div>
                        <p>Express</p>
                        <span>Para la creación de APIs</span>
                    </div>
                </li>
            </ol>
        </section>
    );
} 
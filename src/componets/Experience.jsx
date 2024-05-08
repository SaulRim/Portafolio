export const Experience = () => {
    return (
        <section className="section-experience"  id = "proyects">
            <h2>Proyectos personales</h2>
            <ol>
                <li>
                    <div ></div>
                    <h3 className="title-experience-proyect">API Platzi</h3>
                    <p>Consumo de una API Rest publica, en una pagina web programada con Vanilla Javascript. Muestra de datos y diseño de una pagina basica.</p>
                    <div className="boton-section-experience">
                        <a href="https://github.com/SaulRim/Consumo-API-Platzi/tree/main/src" className = "boton-experience" target="_blank">Mas...</a>
                    </div>
                </li>
                <li>
                    <div></div>
                    <h3 className="title-experience-proyect">API Minecraft</h3>
                    <p>Creación de una API Rest para la obtención de datos basicos de mobs del juego Minecraft. Utilizando NodeJs y Javascript en una pagina web basica.</p>
                    <div className="boton-section-experience">
                        <a href="https://github.com/SaulRim/Servidor_Node_1/tree/main/src" className = "boton-experience" target="_blank">Mas...</a>
                    </div>
                </li>
                <li>
                    <div></div>
                    <h3 className="title-experience-proyect">Juego Pan-cuchillo-Mantequilla</h3>
                    <p>Juego que imita las caracteristicas del piedra papel o tijeras utilizando React y Javascript.</p>
                    <div className="boton-section-experience">
                        <a href="https://github.com/SaulRim/Pan-Cuchillo-Mantequilla" className = "boton-experience" target="_blank">Mas...</a>
                    </div>
                </li>
                <li>
                    <div ></div>
                    <h3 className="title-experience-proyect">Cajero</h3>
                    <p>Aplicación de banco para la extracción de ciertas cantidades de efectivo dada una cantidad especificada de dinero. Creada en PHP con llamada desde una pagina Web</p>
                    <div className="boton-section-experience">
                        <a href="https://github.com/SaulRim/Cajero" className = "boton-experience" target="_blank">Mas...</a>
                    </div>
                </li>
                <li>
                    <div></div>
                    <h3 className="title-experience-proyect" >Aula Virtual</h3>
                    <p>Programa de simulación de un aula escolar virtual en 3D. Utilizando el motor grafico Unity, modelado en Blender y programado en C#</p>
                    <div className="boton-section-experience">
                        <a href="https://github.com/SaulRim/BoxClass" className = "boton-experience" target="_blank">Mas...</a>
                    </div>
                </li>
            </ol>
        </section>
    );
}
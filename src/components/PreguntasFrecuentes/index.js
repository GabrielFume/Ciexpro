import React from "react";
import { Switch, Route } from "react-router-dom";
import AllUsers from "../AllUsers";
import Profile from "../Profile";

const PreguntasFrecuentes = () => (
    <div>
        {/* PAGE CONTENT */}
        <div id="page-content">
          <div id="page-header">
            <div className="ken-burns" style={{backgroundImage: 'url(assets/images/Preguntas_frecuentes.jpg)', backgroundPosition: 'center', top: '-50px'}} />
            <div className />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <i class="decode-icon-placeholder wow tada" style="color: #0082cb;"></i> */}
                  {/* <h1 style={{color: '#0082cb'}}>Contáctanos</h1> */}
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}
          </div>{/* page-header */}
          <div className="container" style={{ paddingBottom: '10%' }}>
        <div className="row">
          <div className="col-md-9 ml-md-auto mr-md-auto">
            <div className="panel-group" id="accordion1">
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse1-1" aria-expanded="true">¿ Que es Ciexpro ?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse1-1" className="panel-collapse collapse show">
                  <div className="panel-body">
                    <p>Somos una alternativa de formación educativa enfocada en el desarrollo de líderes auténticos que se encuentran en permanente transformación,
                    que requieren herramientas para ser agentes de innovación en sus organizaciones o emprendimientos, respondiendo de forma creativa a ambientes de
                    cambio.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse2-1">¿ Por que iniciar esta aventura con ustedes ?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse2-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Nuestro objetivo es guiarte al camino de la transformación del liderazgo auténtico y asesorarte en las diferentes áreas del programa para
                     que inicies tu propio camino al éxito. </p>

                     <p>Además, cuentas con Acceso 24 horas al día para que aprendas a tu propio ritmo y en español.</p>

                     <p>Contarás con apoyo de nuestros guías vía online (Chat, correo electrónico). Programas online diseñados por especialistas en las áreas desarrolladas.</p>

                     <p>Certificados digitales al culminar los programas.</p>

                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse3-1">¿Que tipo de programas tienen disponibles?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p> <strong>eMaster:</strong>  Programas con una duración de más de cuatro (4) meses, que busca potenciar tus
                     habilidades y convertirte en un líder auténtico en diferentes áreas que te lleven a ser un líder auténtico.</p>

                     <p> <strong>eBootcamp:</strong>  Programas con una duración de una (1) a cuatro (4) semanas, que busca darte las
                      herramientas para aprender de manera práctica y rápida los temas actuales.</p>

                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse4-1">¿Necesito conocimiento previo para tomar mis clases?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse4-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>¡No requieres ningún conocimiento previo! Sólo necesitas conexión a Internet y una computadora, laptop, tablet o smartphone. </p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse5-1">¿Como funcionan los programas? ¿Debo seguir un horario?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse5-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Nuestros programas son 100% online y disponible 24/7 en la plataforma, una vez que se asigne tu fecha de inicio y cierre, podrás empezar a 
                    vivir la experiencia de transformación. </p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse6-1">¿Cual es la modalidad de estudio?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse6-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Al iniciar alguno de nuestros programas encontrarás vídeos, material de lectura, ejercicios, audios, infografías, foros
                     y desafíos que te permitirán desarrollar y potenciar tus habilidades. </p>

                     <p>Además, podrás participar en foros con la comunidad de estudiantes y tutores, que te darán las herramientas para potenciar tus habilidades. </p> 
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse7-1">¿Que metodos de pago aceptan?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse7-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Por tu seguridad y rapidez, aceptamos plataformas de pago mundialmente conocidas para la venta por Internet. <strong> PayPal y PayU.</strong>  </p>

                    <p>Para poder abonar tus compras por medio de estas plataformas debes disponer de una cuenta en alguna de ellas.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse8-1">¿Cuanto tarda en activarse si pago con PayPal?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse8-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>En algunos casos hasta 24 horas, pero casi siempre menos de una hora.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse9-1">¿Me enviaran una factura?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse9-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Sí, una vez el pago se haga efectivo se envía una factura a tu correo. </p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse10-1">¿Ya realicé el pago ¿qué pasos debo seguir?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse10-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Después de pagar recibirás un email con la información y el curso se activará en la fecha de inicio indicada previamente.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse11-1">¿Apenas realice el pago puedo iniciar el programa?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse11-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>El inicio del programa está sujeto a la fecha acordada por la Coordinación Académica que será notificada al participante previo a realizar el pago.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse12-1">¿Puedo compartir mi cuenta con varias personas?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse12-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Cada cuenta es individual, el progreso aprendizaje está diseñado para que recorras el camino de manera independiente, al igual que
                     el certificado digital son a nombre del usuario registrado.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse13-1">¿Cuentan con políticas de reembolso?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse13-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Te ofrecemos un reembolso completo hasta 10 días antes de iniciar el programa cancelado, siempre y cuando no hayas comenzado el programa.
                     Si por el contrario el participante ingresa al pierde su derecho a un reembolso cuando es un pago único.</p>

                     <p>En esos casos de notificar el retiro o cancelación 5 días previos al inicio del programa, se emitirá una nota de crédito o reembolso
                      donde se reconocerá un 80% del valor de la actividad, reteniendo un 20% por concepto de gastos administrativos.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
               <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse14-1">¿Puedo congelar mi cupo?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse14-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Si informas que no podrás realizar el programa, podrás congelar su reserva para ser utilizada en el transcurso de un
                     año calendario, a partir de la fecha de inicio del programa para el que aplicó originalmente.</p>

                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
               <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse15-1">¿Puedo descargar los materiales?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse15-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Los programas son 100% online y todo el contenido solo está disponibles 24/7 en la plataforma mientras el programa esté en curso,
                     además puede descargar la aplicación móvil para que disfrutes del material. </p>

                     <p>La experiencia está diseñada para que disfrutes el material mientras estés cursando cualquiera de nuestros programas.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse16-1">¿Al culminar el programa me entregan un Certificado?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse16-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Todos nuestros programas generan un certificado que puedes descargar como PDF una vez hayas culminado. </p>

                     <p>La experiencia está diseñada para que disfrutes el material mientras estés cursando cualquiera de nuestros programas.</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
            </div>{/* accordion */}
            <br />
            <p>Atención al cliente: para solicitar apoyo, manifestar alguna inquietud o realizar sugerencias, puedes contactar directamente a un representante
           a través de nuestro correo electrónico ciexpro@ciexpro.com.</p>
          </div>{/* col */}


        </div>{/* row */}
      </div>
        </div>{/* PAGE CONTENT */}
        {/* MAIN CONTAINER */}
      </div>
);

export default PreguntasFrecuentes;
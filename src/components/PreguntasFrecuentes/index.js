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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue vestibulum, ornare dolor ac, facilisis dui. Vivamus tempus felis sed ligula congue interdum vitae eget neque. Vivamus faucibus volutpat ipsum, ac faucibus libero interdum ac. Ut accumsan libero eget viverra scelerisque. Curabitur eu aliquet lectus. Nulla augue leo, condimentum quis purus vitae, maximus ultricies odio. Pellentesque nec aliquam nisi.</p>
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
                    <p>Donec faucibus, tortor vel posuere eleifend, nulla quam vehicula lorem, vitae rutrum eros eros semper velit. Cras quis diam ipsum. Mauris odio mi, ullamcorper id placerat at, euismod vel quam. Donec in cursus augue, quis commodo tortor. Nunc posuere diam at orci dignissim, sed hendrerit nulla rhoncus. Praesent ac purus non magna finibus viverra. In vestibulum ornare elit at laoreet. Curabitur nec magna at elit rhoncus.</p>
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
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse4-1">¿Necesito conocimiento previo para tomar mis clases?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse5-1">¿Como funcionan los programas? ¿Debo seguir un horario?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse6-1">¿Cual es la modalidad de estudio?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse7-1">¿Que metodos de pago aceptan?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse8-1">¿Cuanto tarda en activarse si pago con PayPal?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse9-1">¿Me enviaran una factura?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse10-1">¿Apenas realice el pago puedo iniciar el programa?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
              <div className="panel">
                <div className="panel-heading">
                  <h6 className="panel-title">
                    <a className="waves" data-toggle="collapse" data-parent="#accordion1" href="#collapse11-1">¿Puedo compartir mi cuenta con varias personas?</a>
                  </h6>
                </div>{/* panel-heading */}
                <div id="collapse3-1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Phasellus interdum posuere augue at venenatis. Sed gravida ex sed elit sodales, vitae volutpat mauris feugiat. Morbi id rhoncus odio. Maecenas sed augue tortor. Etiam feugiat ex a massa finibus scelerisque. Proin feugiat, justo eu fringilla malesuada, metus orci sodales dui, vitae laoreet nisi purus vel tellus. Nam lacinia feugiat ornare. Nulla a tortor ut ligula venenatis mollis nec eget nisl. Morbi rhoncus erat nisl, non tempus diam vulputate et</p>
                  </div>{/* panel-body */}
                </div>{/* panel-collapse */}
              </div>{/* panel */}
            </div>{/* accordion */}
          </div>{/* col */}
        </div>{/* row */}
      </div>
        </div>{/* PAGE CONTENT */}
        {/* MAIN CONTAINER */}
      </div>
);

export default PreguntasFrecuentes;
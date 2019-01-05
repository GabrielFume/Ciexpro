import React, { Component } from 'react';
import { Link } from "react-router-dom";


// import Header from '/Header'
// import Main from '/Main'

class Footer extends Component {
	render(){
		return (
      <div>

          <div id="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 text-center">
                  <div className="widget widget-text">
                    <div>
                      <p><img src="assets/images/01_AF_LOGOTIPO_CIEXPRO_Blanco.png" alt /></p>
                      <br />
                    </div>
                  </div>{/* widget-text */}
                </div>{/* col */}
                <div className="col-lg-2 col-md-12 col-sm-12">
                  <div className="widget widget-pages">
                    <h6 className="widget-title" />
                    <ul>
                      <li><Link to="/" style={{color: '#fff'}}>Inicio</Link></li>
                      <li><Link to="/ebootcamp" style={{color: '#fff'}}>eBootcamp</Link></li>
                      <li><Link to="/emaster" style={{color: '#fff'}}>eMaster</Link></li>
                      <li><Link to="/preguntas_frecuentes" style={{color: '#fff'}}>Preguntas Frecuentes</Link></li>
                    </ul>
                  </div>
                </div>{/* col */}
                <div className="col-lg-4 col-md-12 col-sm-12 text-center">
                  <div className="widget widget-pages">
                    <h6 className="widget-title" style={{color: '#fff'}}>Mapa</h6>
                    <ul>
                      <li><Link to="/salas" style={{color: '#fff'}}>Salas</Link></li>
                      <li><Link to="/contacto" style={{color: '#fff'}}>Contacto</Link></li>
                      { /*<li><a href="ciexpertos.html" style={{color: '#fff'}}>Expertos</a></li>
                      <li><a href="contact.html" style={{color: '#fff'}}>Contacto</a></li>*/ }
                      <li><Link to="/terminos_condiciones" style={{color: '#fff'}}>Terminos y condiciones</Link>

                  </li>
                      {/* <li><a href="#" style="color:#fff;">Blog</a></li> */}
                      {/* <li><a href="#" style="color:#fff;">Contacto</a></li> */}
                    </ul>
                  </div>
                </div>{/* col */}
                <div className="col-lg-3 col-md-12 col-sm-12 text-center">
                  <div className="widget widget-contact">
                    {/* <h6 class="widget-title" style="color:#fff;">Informacion de contacto</h6> */}
                    <ul className="text-left">
                      <li style={{color: '#fff'}}>Av. Eugenio Mendoza con 2da. Transversal, Torre Multinvest, <br className="d-block d-md-none d-lg-block" /> Piso 2, Oficina 2C. La Castellana <br />Caracas – Venezuela.</li>
                      <li className="text-left" style={{color: '#fff'}}>+58 212-2645130</li>
                      <li><a href="mailto:office@milothemes.com" style={{color: '#fff'}}>ciexpro@ciexpro.com</a></li>
                    </ul>
                  </div>{/* widget-contact */}
                  <div className="widget widget-social">
                    <div className="social-media rounded">
                      <a className="facebook" href="https://www.facebook.com/Ciexpro/"><i className="fa fa-facebook" /></a>
                      <a className="twitter" href="https://twitter.com/ciexpro/"><i className="fa fa-twitter" /></a>
                      <a className="instagram" href="https://www.instagram.com/ciexpro/"><i className="fa fa-instagram" /></a>
                      <a className="linkedin" href="https://www.youtube.com/channel/UCoq81aIEknX3aVWqJVmzutw"><i className="fa fa-youtube" /></a>
                      <a className="linkedin" href="https://ve.linkedin.com/company/ciexpro"><i className="fa fa-linkedin" /></a>
                    </div>{/* social-media */}
                  </div>{/* widget-social */}
                </div>{/*col */}
              </div>{/* row */}
            </div>{/* container */}
          </div>{/* footer */}
          </div>


    );
	}
}

export default Footer
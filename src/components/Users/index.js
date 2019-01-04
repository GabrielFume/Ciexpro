import React from "react";
import { Switch, Route } from "react-router-dom";
import AllUsers from "../AllUsers";
import Profile from "../Profile";

const Users = () => (
    <div>
        {/* PAGE CONTENT */}
        <div id="page-content">
          <div id="page-header">
            <div className="ken-burns" style={{backgroundImage: 'url(assets/images/Header_Contacto.png)', backgroundPosition: 'center', top: '-50px'}} />
            <div className />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <i class="decode-icon-placeholder wow tada" style="color: #0082cb;"></i> */}
                  <h1 style={{color: '#0082cb'}}>Contáctanos</h1>
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}
          </div>{/* page-header */}
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                {/* <h6 style="font-weight: 600;">Contactanos</h6> */}
                <form id="contact-form" name="contact-form" method="post" action="assets/php/send.php">
                  <fieldset>
                    <div id="alert-area" />
                    <p>
                      <input className="col-12" id="name" type="text" name="name" placeholder required />
                      <span />
                      <label htmlFor="name">Nombre</label>
                    </p>
                    <p>
                      <input className="col-12" id="email" type="text" name="email" placeholder required />
                      <span />
                      <label htmlFor="email">Correo electrónico</label>
                    </p>
                    {/* <p>
									<input class="col-12" id="subject" type="text" name="email" placeholder="" required>
									<span></span>
									<label for="subject">Motivo</label>
								</p> */}
                    <p>
                      <textarea className="col-12" id="message" name="message" rows={3} cols={25} placeholder required defaultValue={""} />
                      <span />
                      <label htmlFor="message">Mensaje</label>
                    </p>
                    <button className="btn btn-primary" id="submit" type="submit" name="submit" value>Enviar mensaje <i className="decode-icon-cursor" /></button>
                  </fieldset>
                </form>
              </div>{/* col */}
              <div className="col-md-4">
                <br />
                <p>Comunícate con nosotros</p>
                <br />
                <div className="widget widget-contact"> {/* ml-lg-5 */}
                  <ul>
                    <li className="address">
                      <i className="decode-icon-placeholder2" />
                      Av. Eugenio Mendoza con 2da. Transversal, Torre Multinvest,<br className="d-block d-md-none d-lg-block" /> Piso 2, Oficina 2C. La Castellana Caracas – Venezuela.
                    </li>
                    <li className="phone">
                      <i className="decode-icon-phone-call" />
                      +58 212-2645130
                    </li>
                    <li className="email">
                      <i className="decode-icon-multimedia" />
                      <a href="mailto:ciexpro@ciexpro.com">ciexpro@ciexpro.com</a>
                    </li>
                  </ul>
                </div>{/* widget-contact */}
              </div>{/* col */}
            </div>{/* row */}
          </div>{/* container */}
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="map" data-zoom={15} data-height={585} data-address="Barnes Street, Sanford, FL" data-address-details="Here is our location" />
              </div>{/* col */}
            </div>{/* row */}
          </div>{/* container */}
        </div>{/* PAGE CONTENT */}
        {/* MAIN CONTAINER */}
      </div>
);

export default Users;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './header.css';
import $ from 'jquery';


// import Header from '/Header'
// import Main from '/Main'

class Header extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount = () =>{
    $('#btn-modal').click(function(){
          $("#modalContain").addClass('active');

        });

        $('#btn-closeModal').click(function(){
          $("#modalContain").removeClass('active');
        });
  }

	render(){
		return (
      <div>
        <header className="header grid">
          {/* LOGOTIPO */}
          <section className="header-logo">
            <a href="index.html">
              <img src="assets/images/logo_ciexpro.png" alt />
            </a>
          </section>
          {/* MENU */}
          <section className="header-menu">
            <a className="waves-effect waves-light " id="btn-modal">
              <span className="fa fa-bars" />
            </a>
          </section>
        </header>
        {/* MODAL*/}
        <article className="modalwindows" id="modalContain">
          {/* CERRAR MODAL */}
          <section className="modalwindows-end">
            <a className="waves-effect waves-light " id="btn-closeModal">
              <span className="fa fa-close" />
            </a>
          </section>
          {/* TITULO MODAL */}
          <section className="modalwindows-title">
            <h4><strong>Ciexpro,</strong> Te llevamos a la cima</h4>
            <div className="line" />
          </section>
          {/* NAV */}
          <nav>
            <ul>
              {/* HOME */}
              <li className="active">
                <Link to="/">
                  <p className="p">Inicio</p>
                </Link>
              </li>
              {/* ABOUT */}
              {/* <li>
						<a href="cursos.html">
							<p>Ciexpro</p>
						</a>
					</li> */}
              {/* TEAM */}
              <li>
                <a href="#">
                  <p className="p">Formación</p>
                </a>
                <ul>
                  <li>
                  <Link to="/emaster">
                      <p className="p">Emaster</p>
                  </Link>
                  </li>
                  <li>
                  <Link to="/ebootcamp">
                      <p className="p">EbootCamp</p>
                  </Link>

                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Salas">
                    <p className="p">Salas</p>
                </Link>
              </li>
              {/* <li>
						<a href="ciexpertos.html">
							<p>Guias</p>
						</a>
					</li> */}
              {/* BLOG */}
              <li>
                <Link to="/contacto">
                      <p className="p">Contacto</p>
                </Link>
              </li>
              {/* BLOG */}
              <li>
                <a href="http://ciexpro.indielms.com">
                  <p className="p">Registro</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* REDES SOCIALES */}
          <ul className="footer-social">
            {/* FACEBOOK*/}
            <li>
              <a href="#" target="_blank">
                <span className="fa fa-facebook" />
              </a>
            </li>
            {/* TWITTER*/}
            <li>
              <a href="#" target="_blank">
                <span className="fa fa-twitter" />
              </a>
            </li>
            {/* INSTAGRAM*/}
            <li>
              <a href="#" target="_blank">
                <span className="fa fa-instagram" />
              </a>
            </li>
            {/* INSTAGRAM*/}
            <li>
              <a href="#" target="_blank">
                <span className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </article>
      </div>
    );
	}
}

export default Header
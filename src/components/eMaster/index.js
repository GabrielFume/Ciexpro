import React from "react";
import { Switch, Route } from "react-router-dom";
import AllUsers from "../AllUsers";
import Profile from "../Profile";

const Emaster = () => (

      <div id="page-content">
        <div id="page-header" className="no-margin-bottom" style={{paddingTop: '260px'}}>
          <div className="ken-burns" style={{backgroundImage: 'url(assets/images/Web_Ciexpro_Header_titular_Producto.jpg)'}} />
          {/* <div class="overlay"></div> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <i class="decode-icon-folder-1 wow tada"></i> */}
                {/* <h1>Llega a la cima del <strong>exito</strong></h1> */}
              </div>{/* col */}
            </div>{/* row */}
          </div>{/* container */}
        </div>{/* page-header */}
        <div className="container">
          <div className="row" style={{paddingTop: '3%', paddingBottom: '7%'}}>
            <div className="col-md-6">
              <div className="headline text-center no-margin-bottom">
                {/* <h6>The best</h6> */}
                <img src="assets/images/Web_Ciexpro_Producto_mujer.jpg" alt />
              </div>{/* headline */}
            </div>{/* col */}
            <div className="col-md-6">
              <div className="headline no-margin-bottom" style={{paddingTop: '10%'}}>
                {/* <h6>The best</h6> */}
                <h3>eMaster:</h3>
                <h2>Liderazgo en Entornos Digitales </h2>
                <br />
                <h5>Liderazgo en Entornos Digitales</h5>
                <p >Forma lo esencial de la visión y de tu carácter para alcanzar el éxito a través de una cultura de liderazgo auténtico en entornos de transformación digital</p>
                <div className="row">
                <div className="col-md-6">
                    <div className="service-box" style={{padding: '7px 40px 7px', borderRadius: '30px', border: 'solid 2px #6e6e6e', width: '93%'}}>
                      <div className="service-box-content">
                        <h6><a href="#" style={{paddingTop: '5%', color: '#6e6e6e'}}>DuraciÓn: 4 meses</a></h6>
                      </div>{/* service-box-content */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-box" style={{padding: '7px 40px 7px', borderRadius: '30px', border: 'solid 2px #6e6e6e', width: '93%'}}>
                      <div className="service-box-content">
                        <h6 style={{marginBottom: '0px', color: '#6e6e6e'}}><a href="#" style={{ color: '#6e6e6e'}}>150$ mensuales</a></h6>      
                      </div>{/* service-box-content */}
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div className="service-box" style={{padding: '7px 40px 7px', borderRadius: '30px', border: 'solid 2px #6e6e6e', width: '93%'}}>
                      <div className="service-box-content">
                        <h6 style={{marginBottom: '0px', color: '#6e6e6e'}}><a href="#" style={{ color: '#6e6e6e'}}>De contado: 500$</a></h6>      
                      </div>{/* service-box-content */}
                    </div>
                  </div>
                
              </div>
                {/*<span style={{color: '#94d60a'}}> ¡HAZ CUMBRE!</span>*/}
              </div>{/* headline */}
            </div>{/* col */}
          </div>{/* row */}
        </div>{/* container */}
        <section style={{backgroundColor: '#0082ca'}}>
          <div className="container">
            <div className="row" style={{display: 'flex', alignItems: 'center', paddingTop: '23%'}}>
              <div className="col-lg-6 col-md-12 col-sm-12" style={{marginTop: '-23%', borderRight: 'solid 2px #fff'}}>
                <div className="headline text-center no-margin-bottom">
                  <a href="assets/pdf/eBootCamp Marca e imagen personal.pdf"><i className="decode-icon-backup wow tada" style={{fontSize: '60px', color: '#fff'}} /></a>
                  <h6><a target="_blank" href="assets/pdf/eBootCamp Marca e imagen personal.pdf" style={{color: '#fff'}}>Descarga de brochure</a></h6>
                </div>{/* headline */}
              </div>{/* col */}
              <div className="col-lg-6 col-md-12 col-sm-12" style={{marginTop: '-23%'}}>
                <div className="headline text-center no-margin-bottom">
                  <a href="https://ciexpro.indielms.com/join_no_access_code" style={{color: '#fff'}}><i className="decode-icon-edit wow tada" style={{fontSize: '60px', color: '#fff'}} /></a>
                  <h6><a href="https://ciexpro.indielms.com/join_no_access_code" style={{color: '#fff'}}>Regístrate</a></h6>
                </div>{/* headline */}
              </div>{/* col */}
            </div>{/* row */}
          </div>{/* container */}
        </section>
        <section>
          <div className="container" style={{paddingTop: '5%'}}>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box style-8" style={{backgroundColor: '#fff', border: 'solid 2px #0082cb', padding: '13px 0px 0px 0px'}}>
                  <div style={{padding: '20px 50px'}}>
                    <h4 className="text-left">CAMPAMENTO 1 – EL PODER DEL LÍDER</h4>
                    <ul className="bullet-list text-left">
                      <li style={{color: '#000'}}>Liderazgo personal</li>
                      <li style={{color: '#000'}}>Desarrollo del potencial personal</li>
                      <li style={{color: '#000'}}>Conversaciones poderosas</li>
                      <li style={{color: '#000'}}>Pensamiento para la resolución de problemas</li>
                    </ul>
                  </div>
                  <div style={{backgroundColor: '#f1f1f1', padding: '50px 40px', borderRadius: '0px 0px 9px 10px'}}>
                    <div style={{borderLeft: 'solid 3px #94d60a'}}>
                      <p style={{color: '#5B5B5F', textAlign: 'left', paddingLeft: '10px'}}>Desarrollar el potencial personal del líder para abordar efectivamente situaciones de cambio y entornos de incertidumbre.</p>
                      {/* <div class="text-right">
                        <span style="text-align: right;color: #94d60a;"> 2019</span>
                      </div> */}
                    </div>
                  </div>
                </div>{/* service-box */}
              </div>{/* col */}
              <div className="col-lg-4 col-md-6">
                <div className="service-box style-8" style={{backgroundColor: '#fff', border: 'solid 2px #0082cb', padding: '13px 0px 0px 0px'}}>
                  <div style={{padding: '20px 50px'}}>
                    <h4 className="text-left">CAMPAMENTO 2 – EL LÍDER DE EQUIPOS</h4>
                    <ul className="bullet-list text-left">
                      <li style={{color: '#000'}}>Liderazgo de equipos y agilidad</li>
                      <li style={{color: '#000'}}>Empowerment: potenciando al equipo</li>
                      <li style={{color: '#000'}}>Gestión de la información y el conocimiento</li>
                      <li style={{color: '#000'}}>Toma de decisiones & smartbusiness</li>
                      {/* <li style="color: #000;">Éxito</li> */}
                    </ul>
                  </div>
                  <div style={{backgroundColor: '#f1f1f1', padding: '50px 40px', borderRadius: '0px 0px 9px 10px'}}>
                    <div style={{borderLeft: 'solid 3px #94d60a'}}>
                      <p style={{color: '#5B5B5F', textAlign: 'left', paddingLeft: '10px'}}>Desarrollar las competencias propias del líder para la gestión de equipos creativos de alto desempeño que contribuyan al incremento de la productividad laboral.</p>
                      {/* <div class="text-right">
                        <span style="text-align: right;color: #94d60a;"> 2019</span>
                      </div> */}
                    </div>
                  </div>
                </div>{/* service-box */}
              </div>{/* col */}
              <div className="col-lg-4 col-md-6">
                <div className="service-box style-8" style={{backgroundColor: '#fff', border: 'solid 2px #0082cb', padding: '13px 0px 0px 0px'}}>
                  <div style={{padding: '20px 50px'}}>
                    <h4 className="text-left">CAMPAMENTO 3.1 – LIDERANDO EL ENTORNO DIGITAL</h4>
                    <ul className="bullet-list text-left">
                      <li style={{color: '#000'}}>Liderazgo estratégico</li>
                          <li style={{color: '#000'}}>Gestión de talento</li>
                          <li style={{color: '#000'}}>Marketing digital</li>
                          <li style={{color: '#000'}}>Fintech</li> 
                    </ul>
                  </div>
                  <div style={{backgroundColor: '#f1f1f1', padding: '50px 40px', borderRadius: '0px 0px 9px 10px'}}>
                    <div style={{borderLeft: 'solid 3px #94d60a'}}>
                      <p style={{color: '#5B5B5F', textAlign: 'left', paddingLeft: '10px'}}>Aplicar las competencias y habilidades del liderazgo que garanticen el 
                      éxito en emprendimientos y la conducción organizacional, en los nuevos entornos digitales.</p>
                      {/* <div class="text-right">
                        <span style="text-align: right;color: #94d60a;"> 2019</span>
                      </div> */}
                    </div>
                  </div>
                </div>{/* service-box */}
              </div>{/* col */}
              <div className="col-lg-3 col-md-2"></div>
              <div className="col-lg-6 col-md-6">
                <div className="service-box style-8" style={{backgroundColor: '#fff', border: 'solid 2px #0082cb', padding: '13px 0px 0px 0px'}}>
                  <div style={{padding: '20px 50px'}}>
                    <h4 className="text-left">CAMPAMENTO 3.2– LIDERANDO LA TRANSFORMACIÓN DIGITAL</h4>
                    <ul className="bullet-list text-left">
                      <li style={{color: '#000'}}>Innovación</li>
                          <li style={{color: '#000'}}>Transformación digital & machine learning</li>
                          <li style={{color: '#000'}}>Analytics y big data</li>
                          <li style={{color: '#000'}}>Liderazgo ágil</li> 
                    </ul>
                  </div>
                  <div style={{backgroundColor: '#f1f1f1', padding: '50px 40px', borderRadius: '0px 0px 9px 10px'}}>
                    <div style={{borderLeft: 'solid 3px #94d60a'}}>
                      <p style={{color: '#5B5B5F', textAlign: 'left', paddingLeft: '10px'}}>Aplicar las competencias y habilidades del liderazgo que garanticen el éxito
                       en emprendimientos y la conducción organizacional, en el marco de la transformación digital.</p>
                      {/* <div class="text-right">
                        <span style="text-align: right;color: #94d60a;"> 2019</span>
                      </div> */}
                    </div>
                  </div>
                </div>{/* service-box */}
              </div>{/* col */}
            </div>{/* row */}
          </div>{/* container */}
        </section>
        <section style={{backgroundColor: '#f1f1f1'}}>
          <div className="container">
            <div className="row" style={{paddingTop: '13%', paddingBottom: '7%'}}>
              <div className="col-md-6">
                <div className="headline text-center no-margin-bottom" style={{paddingTop: '23%'}}>
                  {/* <h6>The best</h6> */}
                  <h3 className="text-left">¿A quién va dirigido?</h3>
                  <p className="text-left">A quienes deseen potenciar sus habilidades y destrezas para proyectarse como profesionales en sus emprendimientos o dentro de sus organizaciones a través de su plan de marca e imagen personal.</p>
                </div>{/* headline */}
              </div>{/* col */}
              <div className="col-md-6">
                <div className="headline text-center no-margin-bottom">
                  {/* <h6>The best</h6> */}
                  <img src="assets/images/eMaster.jpg" alt />
                </div>{/* headline */}
              </div>{/* col */}
            </div>{/* row */}
          </div>{/* container */}
        </section>
        <div className="container" id="next-section" style={{paddingTop: '3%'}}>
          <div className="row">
            <div className="col-md-12">
              <div className="headline text-center">
                {/* <h6>Servicios</h6> */}
                <h1>Nuestros guías</h1>
              </div>{/* headline */}
            </div>{/* col */}
          </div>{/* row */}
        </div>{/* container */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/Expertos_Ciexpro_Marianela02.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/Expertos_Ciexpro_Marianela02.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Marianela Luzardo</h6>
                <span>CEO Ciexpro - Coach</span>
                <p>Creo en el ser humano y sus capacidades para crear, todos podemos ser un buen líder desde nuestra autenticidad.</p>
              </div>{/* about-me */}
            </div>{/* col */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/Expertos_Ciexpro_Luis2.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/Expertos_Ciexpro_Luis2.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Luis Lamberti</h6>
                <span>Especialista en Marketing</span>
                <p>El marketing amerita siempre un poco de sarcasmo y emociones.</p>
              </div>{/* about-me */}
            </div>{/* col */}
          </div>{/* row */}
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/ASTRID.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/ASTRID.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Astrid Loyo</h6>
                <span>Especialista en Desarrollo Humano</span>
                <p>No hay límites para el desarrollo del ser humano, el punto de partida es creer en sí mismo.</p>
              </div>{/* about-me */}
            </div>{/* col */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/CARLOS.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/CARLOS.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Carlos Subero</h6>
                <span>Especialista en Psicología y Psicoterapia</span>
                <p>Mi misión personal es despertar la consciencia, aliviar el sufrimiento humano y generar bienestar a mi alrededor</p>
              </div>{/* about-me */}
            </div>{/* col */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/ASSAF.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/ASSAF.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>ASSAF JAMIN</h6>
                <span>Especialista en Psicología y Psicoterapia</span>
                <p>Mi misión personal es despertar la consciencia, aliviar el sufrimiento humano y generar bienestar a mi alrededor</p>
              </div>{/* about-me */}
            </div>{/* col */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/MAYLING.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/MAYLING.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Mayling Berrotera</h6>
                <span>Diseñadora Instruccional</span>
                {/*<p>Mi misión personal es despertar la consciencia, aliviar el sufrimiento humano y generar bienestar a mi alrededor</p>*/}
              </div>{/* about-me */}
            </div>{/* col */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/ASTRID.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/ASTRID.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Astrid Loyo</h6>
                <span>Especialista en Desarrollo Humano</span>
                {/*<p>Mi misión personal es despertar la consciencia, aliviar el sufrimiento humano y generar bienestar a mi alrededor</p>*/}
              </div>{/* about-me */}
            </div>{/* col */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/CLAU.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/CLAU.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Carlos Subero</h6>
                <span>Especialista en Psicología y Psicoterapia</span>
                <p>Mi misión personal es despertar la consciencia, aliviar el sufrimiento humano y generar bienestar a mi alrededor</p>
              </div>{/* about-me */}
            </div>{/* col */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-me style-2">
                <div className="about-me-thumbnail rounded-circle">
                  <img src="assets/images/Javier.png" alt style={{width: '96%'}} />
                  <div className>
                    <a className="fancybox" data-fancybox="about" href="assets/images/Javier.png" />
                  </div>{/* about-me-hover */}
                </div>{/* about-me-thumbnail */}
                <h6>Javier Rizzo</h6>
                <span>Especialista en economía</span>
                {/*<p>Mi misión personal es despertar la consciencia, aliviar el sufrimiento humano y generar bienestar a mi alrededor</p>*/}
              </div>{/* about-me */}
            </div>{/* col */}
          </div>{/* row */}
        </div>{/* container */}
      </div>
  
);

export default Emaster;
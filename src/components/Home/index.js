import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class Home extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount = () =>{
     $('#mostrar1').hide();

        $('#habilidades').hover(function(){
                    $("#habilidades").removeClass( "actives" );
                    $("#habilidades").addClass( "actives" );
                    $('#mostrar1').show();
                    $('#icono1').hide();

                });

                $('#habilidades').mouseleave(function(){
                     $("#habilidades").removeClass( "actives" );
                     $('#mostrar1').hide();
                     $('#icono1').show();
                });


                // HABILIDADES 2

                 $('#mostrar2').hide();

                $('#habilidades2').hover(function(){
                    $("#habilidades2").removeClass( "actives" );
                    $("#habilidades2").addClass( "actives" );
                    $('#mostrar2').show();
                    $('#icono2').hide();
                });

                $('#habilidades2').mouseleave(function(){
                     $("#habilidades2").removeClass( "actives" );
                     $('#mostrar2').hide();
                     $('#icono2').show();
                });

                 // HABILIDADES 3

                 $('#mostrar3').hide();

                $('#habilidades3').hover(function(){
                    $("#habilidades3").removeClass( "actives" );
                    $("#habilidades3").addClass( "actives" );
                    $('#mostrar3').show();
                    $('#icono3').hide();
                });

                $('#habilidades3').mouseleave(function(){
                     $("#habilidades3").removeClass( "actives" );
                     $('#mostrar3').hide();
                     $('#icono3').show();
                });


                 // HABILIDADES 4

                 $('#mostrar4').hide();

                $('#habilidades4').hover(function(){
                    $("#habilidades4").removeClass( "actives" );
                    $("#habilidades4").addClass( "actives" );
                    $('#mostrar4').show();
                    $('#icono4').hide();
                });

                $('#habilidades4').mouseleave(function(){
                     $("#habilidades4").removeClass( "actives" );
                     $('#mostrar4').hide();
                     $('#icono4').show();
                });

                 // HABILIDADES 5

                 $('#mostrar5').hide();

                $('#habilidades5').hover(function(){
                    $("#habilidades5").removeClass( "actives" );
                    $("#habilidades5").addClass( "actives" );
                    $('#mostrar5').show();
                    $('#icono5').hide();
                });

                $('#habilidades5').mouseleave(function(){
                     $("#habilidades5").removeClass( "actives" );
                     $('#mostrar5').hide();
                     $('#icono5').show();
                });

                 // HABILIDADES 6

                 $('#mostrar6').hide();

                $('#habilidades6').hover(function(){
                    $("#habilidades6").removeClass( "actives" );
                    $("#habilidades6").addClass( "actives" );
                    $('#mostrar6').show();
                    $('#icono6').hide();
                });

                $('#habilidades6').mouseleave(function(){
                     $("#habilidades6").removeClass( "actives" );
                     $('#mostrar6').hide();
                     $('#icono6').show();
                });

                 // HABILIDADES 7

                 $('#mostrar7').hide();

                $('#habilidades7').hover(function(){
                    $("#habilidades7").removeClass( "actives" );
                    $("#habilidades7").addClass( "actives" );
                    $('#mostrar7').show();
                    $('#icono7').hide();
                });

                $('#habilidades7').mouseleave(function(){
                     $("#habilidades7").removeClass( "actives" );
                     $('#mostrar7').hide();
                     $('#icono7').show();
                });

                 // HABILIDADES 8

                 $('#mostrar8').hide();

                $('#habilidades8').hover(function(){
                    $("#habilidades8").removeClass( "actives" );
                    $("#habilidades8").addClass( "actives" );
                    $('#mostrar8').show();
                    $('#icono8').hide();
                });

                $('#habilidades8').mouseleave(function(){
                     $("#habilidades8").removeClass( "actives" );
                     $('#mostrar8').hide();
                     $('#icono8').show();
                });
  }

render(){
  return(
	<div>
        <div id="main-container">
          <section className="full-section dark-section parallax" id="section-57" data-stellar-background-ratio="0.1s" style={{backgroundColor: 'black', backgroundImage: 'url(assets/images/Parallax_Ciexpro_V2.png)', paddingTop: '50%', marginTop: '8px'}}>
            <div className="full-section-container" style={{marginTop: '-28%'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="headline text-center">
                      <div className="text-center transformate">
                        {/* <h6>Shortcodes</h6> */}
                        <h3><strong>Transfórmate</strong><br /><span>en un líder auténtico</span></h3>
                      </div>
                    </div>{/* headline */}
                  </div>{/* col */}
                </div>{/* row */}
              </div>{/* container */}
              <div className="container">
              </div>{/* container */}
            </div>{/* full-section-container */}
          </section>{/* full-section */}
          {/* SECTION CIMA*/}
          <section className="cima">
            <div className="container" id="next-section">
              <div className="row">
                <div className="col-md-12">
                  <div className="headline text-center">
                    {/* <h6>Servicios</h6> */}
                    <h1>Llega a la cima<br /> <span className="title-strong">del Éxito</span></h1>
                  </div>{/* headline */}
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="about-me text-box rounded large m-about">
                    <div className="about-me-thumbnail">
                      <Link to="/emaster">
                        <img src="assets/images/Bootcamp_E-Bootcamp.png" alt />
                      </Link>
                    </div>
                    <div>
                    <Link to="/emaster">
                        <h6>eMaster</h6>
                      </Link>
                      
                      <div className="hr default-color" />
                      <Link to="/emaster">
                        <p>Potencia tus habilidades y conviértete en un líder auténtico <br /><br />
                          <i className="fa fa-clock-o ico" /> +4 meses</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="about-me text-box rounded large m-about">
                    <div className="about-me-thumbnail">
                      <Link to="/ebootcamp">
                        <img src="assets/images/Bootcamp_E-Master.png" alt />
                      </Link>
                    </div>
                    <div>
                      <Link to="/ebootcamp">
                        <h6>eBootCamp</h6>
                      </Link>
                      
                      <div className="hr default-color" />
                      {/* <span>Team Leader</span> */}
                      <Link to="/ebootcamp">
                        <p>Aprende de manera práctica y rápida los temas actuales <br /><br />
                          <i className="fa fa-clock-o ico" /> De 1 a 4 semanas
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div class="col-lg-6 col-md-12 col-sm-12" >

						<div class="about-me text-box rounded large ">

							<div class="about-me-thumbnail ">

								<img src="assets/images/Bootcamp_E-Micromaster.png" alt="">

								<div class="">
									<a class="fancybox" data-fancybox="about" href="../images/about/team/image-7.jpg"></a>
								</div>

							</div>

							

							<div style="padding: 25px">
							
								<h6>eMicroMaster</h6>
								<span>Designer</span>

								<p>Especialízate en el área de tu interés y desarrollar tus aptitudes <br><br>
								<i class="fa fa-clock-o"></i> De 1 a 3 meses
								</p>
							</div>

							

						</div>

					</div> */}
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                  Inicia la aventura
                </button>
              </div>
            </div>{/* container */}
          </section>
          <section className="section-habilidades">
            <div className="container">
              <div className="container" id="next-section">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="headline text-center">
                      {/* <h6>Servicios</h6> */}
                      <h1>Desarrolla tus <strong>habilidades</strong></h1>
                    </div>{/* headline */}
                  </div>{/* col */}
                </div>{/* row */}
              </div>{/* container */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-12 col-sm-12 card-habi" id="habilidades" style={{}}>
                        <div className="item" id="icono1">
                          <img src="assets/icons/Icono_Comunicacion.svg" alt width={120} />
                        </div>
                        <div className="item-2">
                          <h4 className="text-center" id="icono1"><strong>Comunicaciones</strong></h4>
                          {/* TEXT ADICIONAL */}
                          <div id="mostrar1">
                            <p style={{fontSize: '14px'}}>Domina habilidades comunicacionales basadas en el respeto y la armonía necesaria para transmitir pensamientos, opiniones, trabajar o liderar equipos.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12 col-sm-12 border-1" id="habilidades2">
                        <div className="item" id="icono2">
                          <img src="assets/icons/Icono_Pensamiento computacional-01.svg" alt width={120} />
                        </div>
                        <div className="item-2">
                          <h4 className="text-center" id="icono2"><strong>Pensamiento computacional</strong></h4>
                          <p style={{fontSize: '14px'}} id="mostrar2">Desarrolla competencias en la era digital para crear nuevas ideas y obtener soluciones originales a los obstáculos que se te presenten.</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12 col-sm-12 border-1" id="habilidades3">
                        <div className="item" id="icono3">
                          <img src="assets/icons/Icono_Liderazgo-01.svg" alt width={120} />
                        </div>
                        <div className="item-2">
                          <h4 className="text-center" id="icono3"><strong>Liderazgo auténtico</strong></h4>
                          <p style={{fontSize: '14px'}} id="mostrar3">Potencia tus habilidades para liderar equipos de forma integral y alcanzar la cima</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12 col-sm-12 border-1" id="habilidades4">
                        <div className="item" id="icono4">
                          <img src="assets/icons/Icono_Marketing-01.svg" alt width={120} />
                        </div>
                        <div className="item-2">
                          <h4 className="text-center" id="icono4"><strong>Marketing</strong></h4>
                          <p style={{fontSize: '14px'}} id="mostrar4">Potencia tus habilidades para liderar equipos de forma integral y alcanzar la cima</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12 col-sm-12 border-3" id="habilidades5">
                        <div className>
                          <div className="item" id="icono5">
                            <img src="assets/icons/Icono_Manejo emocional-01.svg" alt width={120} />
                          </div>
                          <div className="item-2">
                            <h4 className="text-center" id="icono5"><strong>Manejo emocional</strong></h4>
                            <p style={{fontSize: '14px'}} id="mostrar5">Reconoce tus emociones y las de los demás para aprender a manejarlas y aprovechar su impulso que te lleve a la meta.</p>
                          </div>
                        </div>				
                      </div>
                      <div className="col-lg-3 col-md-12 col-sm-12 border-2" id="habilidades6">
                        <div className="item" id="icono6">
                          <img src="assets/icons/Icono_Finanzas digitales.svg" alt width={120} />
                        </div>
                        <div className="item-2">
                          <h4 className="text-center" id="icono6"><strong>Finanzas Digitales</strong></h4>
                          <p style={{fontSize: '14px'}} id="mostrar6">Adquiere herramientas para comprender la transformación y la evolución del dinero en la era digital.</p>
                        </div> 
                      </div>
                      <div className="col-lg-3 col-md-12 col-sm-12 border-2" id="habilidades7">
                        <div className="item" id="icono7">
                          <img src="assets/icons/Icono_Analisis-01.svg" alt width={120} />
                        </div>
                        <div className="item-2">
                          <h4 className="text-center" id="icono7"><strong>Análisis</strong></h4>
                          <p style={{fontSize: '14px'}} id="mostrar7">Adquiere herramientas para comprender la transformación y la evolución del dinero en la era digital.</p>
                        </div> 
                      </div>
                      <div className="col-lg-3 col-md-12 col-sm-12 border-2" id="habilidades8">
                        <div className>
                          <div className="item" id="icono8">
                            <img src="assets/icons/Icono_Negociacion-01.svg" alt width={120} />
                          </div>
                          <div className="item-2">
                            <h4 className="text-center" id="icono8"><strong>Negociación</strong></h4>
                            <p style={{fontSize: '14px'}} id="mostrar8">Identifica las características de cualquier situación y extrae información para obtener soluciones acertadas y tomar decisiones.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* col */}
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}
          </section>{/* container */}
          <section className="cumbre">
            <div className="container combre-cont" id="next-section">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="headline text-center">
                    {/* <h6>Servicios</h6> */}
                    <h1><strong>Te guiamos</strong> a la cumbre</h1>
                  </div>{/* headline */}
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="owl-carousel services-slider">
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/Expertos_Ciexpro_Gerardine.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ico-comunicaciones.png" alt style={{width: '120px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Gerardine González</p>
                            <p>Especialista en Marketing</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/Expertos_Ciexpro_Marianela02.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ICONOsMesa de trabajo 2.png" alt style={{width: '100px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Marianela Luzardo</p>
                            <p>CEO Ciexpro - Coach</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/Expertos_Ciexpro_Luis2.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ICONOsMesa de trabajo 3.png" alt style={{width: '120px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Luis Lamberti </p>
                            <p>Especialista en Marketing </p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/ASSAF.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ico-comunicaciones.png" alt style={{width: '140px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Assaf Yamin</p>
                            <p>Especialista en Tecnología Educativa</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/CARLOS.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ICONOsMesa de trabajo 5.png" alt style={{width: '120px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Carlos Subero</p>
                            <p>Especialista en Psicoterapia</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/MAYLING.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ICONOsMesa de trabajo 6.png" alt style={{width: '90px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Mayling Berrotera</p>
                            <p>Diseñadora Instruccional</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/ASTRID.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ICONOsMesa de trabajo 7.png" alt style={{width: '120px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Astrid Loyo</p>
                            <p>Especialista en Desarrollo Humano</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/CLAU.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ICONOsMesa de trabajo 7.png" alt style={{width: '120px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Claudia Alkhouri</p>
                            <p>Diseñadora Instruccional</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="service-box style-8 large">
                        <img src="assets/images/Javier.png" alt />
                        <div className="service-box-content guias">
                          <div className="icon-guia">
                            <img src="assets/icons/blancos/ICONOsMesa de trabajo 7.png" alt style={{width: '120px'}} />
                          </div>
                          <div className="about-guia">
                            <p className="name">Javier Rizzo</p>
                            <p>Especialista en economía</p>
                          </div>	
                        </div>{/* service-box-content */}
                      </div>{/* service-box */}
                    </div>{/* item */}
                  </div>{/* services-slider */}
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}
          </section>
          <section className="full-section dark-section parallax" id="section-57" data-stellar-background-ratio="0.1s" style={{backgroundColor: 'black', backgroundImage: 'url(assets/images/TestimonialMesadetrabajo1.jpg)', backgroundPosition: '50% 22%'}}>
            <div className="full-section-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="headline text-center">
                      {/* <h6>Shortcodes</h6> */}
                      <h1>Nuestros <strong>aventureros</strong> </h1>
                    </div>{/* headline */}
                  </div>{/* col */}
                </div>{/* row */}
              </div>{/* container */}
              <div className="container">
                <div className="row">
                  <div className="col-md-10 ml-md-auto mr-md-auto">
                  </div>{/* col */}
                  <div className="owl-carousel testimonials-slider style-3">
                    <div className="item">
                      <div className="testimonial style-2">
                        <blockquote>
                          <p style={{color: '#fff'}}>“Ciexpro me permitió aclarar y sentar las bases sobre mi idea de negocio. Saber que un equipo te acompaña, te guía y te hace más fácil el desarrollo de los primeros pasos de cada proyecto”</p>
                        </blockquote>
                        <div className="testimonial-author">
                          <div>
                            <img src="assets/images/Sthefanie.jpeg" alt width={100} style={{width: '200px', height: '200px'}} />
                          </div>
                          <h3>Sthefanie Balcázar</h3>
                          <span className="desc-testimonial">Lic. en Comunicación Social y <br /> Especialista en Derecho y Política Internacional</span>
                        </div>
                      </div>{/* testimonial */}
                    </div>{/* item */}
                    <div className="item">
                      <div className="testimonial style-2">
                        <blockquote>
                          <p style={{color: '#fff'}}>Mi experiencia con Ebootcamp fue muy gratificante y productiva para mi desarrollo profesional y el de mi organización. Buen contenido, buenos ejercicios y muy divertido de realizar.</p>
                        </blockquote>
                        <div className="testimonial-author">
                          <div>
                            <img src="assets/images/Nelson.jpeg" alt width={100} style={{width: '200px', height: '200px'}} />
                          </div>
                          <h3>Nelson Bravo González</h3>
                          <span className="desc-testimonial">Licenciado en Comunicación Social mención Corporativa.<br /> Director de Marquetry Art. Laminados fotográficos en Acrílico.</span>
                        </div>
                      </div>{/* testimonial */}
                    </div>{/* item */}
                  </div>{/* testimonials-slider */}
                </div>{/* row */}
              </div>{/* container */}
            </div>{/* full-section-container */}
          </section>{/* full-section */}
          <section className="section-cont">
            <div className="container">
              <div className="container" id="next-section">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="headline text-center">
                      {/* <h6>Servicios</h6> */}
                      <h1>Contacta con nosotros</h1>
                    </div>{/* headline */}
                  </div>{/* col */}
                </div>{/* row */}
              </div>{/* container */}
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="service-box style-4">
                    <div className="service-box-content">
                      <img className="img-form" src="assets/images/Formulario.png" alt="contactanos" />
                      {/* <h6><a href="single-service.html">Imagen</a></h6>

								<p>Pellentesque sit amet tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis.</p> */}
                    </div>
                  </div>
                </div>{/* col */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="service-box style-6">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="headline text-center">
                            {/* <h6>Servicios</h6> */}
                            <h3>Déjanos tus datos</h3>
                          </div>{/* headline */}
                          <form id="contact-form" name="contact-form" method="post">
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
                                <label htmlFor="email">Correo</label>
                              </p>
                              <p>
                                <input className="col-12" id="subject" type="text" name="text" placeholder required />
                                <span />
                                <label htmlFor="subject">Objetivo</label>
                              </p>
                              <p>
                                <textarea className="col-12" id="message" name="message" rows={3} cols={25} placeholder required defaultValue={""} />
                                <span />
                                <label htmlFor="message">Mensaje</label>
                              </p>
                              <div className="text-center">
                                <button className="btn btn-primary" id="submit" type="submit" name="submit" value>Enviar mensaje <i className="decode-icon-cursor" /></button>
                                {/* btn btn-default btn-outline waves waves-dark center */}
                              </div>
                            </fieldset>
                          </form>
                        </div>{/* col */}
                      </div>{/* row */}
                    </div>{/* container */}
                  </div>{/* service-box */}
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}		
          </section>
          {/* <div class="container">
				<div class="row">
					<div class="col-xl-4 col-lg-5">

						<div class="headline no-margin-bottom" style="padding-top: 40px;">

							
							<h3><strong>RedLativ</strong> una empresa con enfoque tecnologico y social</h3>

						</div>

					</div>
				</div>
			</div> */}
          <br /><br />
          
          {/* <div id="footer">

				<div class="container">
					<div class="row">
						<div class="col-xl-2 col-md-3 ml-md-auto order-md-12">

							<div class="widget widget-pages">

								<h6 class="widget-title">Usefull links</h6>

								<ul>
									<li><a href="#">About us</a></li>
									<li><a href="#">Contact</a></li>
									<li><a href="#">Terms &amp; Conditions</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>

							</div>

						</div>
						<div class="col-xl-2 col-md-3 order-md-12">

							<div class="widget widget-pages">

								<h6 class="widget-title">Fast links</h6>

								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Testimonials</a></li>
									<li><a href="#">Services &amp; Features</a></li>
									<li><a href="#">Accordions &amp; Tabs</a></li>
								</ul>

							</div>

						</div>
						<div class="col-lg-4 col-md-6">

							<div class="widget widget-social">

								<p><img src="assets/images/logo-white.png" alt=""></p>

								<div class="social-media rounded">

									<a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a>
									<a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
									<a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
									<a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a>
									<a class="behance" href="#"><i class="fa fa-behance"></i></a>
									<a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>

								</div>

							</div>

							<div class="widget widget-text">

								<div>

									<p class="copyright"><img src="assets/images/logo-milo.png" alt=""> 2017. All Rights Reserved.</p>

								</div>

							</div>

						</div>
					</div>
				</div>

			</div> */}
        </div>{/* PAGE CONTENT */}
        {/* Modal */}
        <div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{maxWidth: '800px', margin: '8% auto'}}>
            <div className="modal-content"> {/* style="background-image: url(assets/images/Fondo_ciexpro_mesa_3.jpg); background-size: cover;" */}
              <div className="modal-body" style={{padding: '0px'}}>
                <div className="row">
                  <div className="col-md-2" /> {/* quitar esto */}
                  <div className="col-md-8">
                    <div className="container" style={{height: '100%'}}>
                      <div className style={{textAlign: 'center', paddingTop: '8%'}}>
                        <h4>ÚNETE A LA AVENTURA</h4>
                        <p style={{color: '#0081C6', fontSize: '18px'}}>Solicita mas información aquí</p>
                      </div>
                      <div className="hr default-color" />
                      <form id="contact-form" name="contact-form" action="https://facebook.us19.list-manage.com/subscribe/post?u=5e96cdf5db7893b101fb1a3ca&id=43a2084ad9" method="post" className="validate" target="_blank" noValidate>
                        <fieldset>
                          <div id="alert-area" />
                          <p>
                            <input className="col-12 required" id="name" type="text" name="FNAME" required />
                            <span />
                            <label htmlFor="name" style={{color: '#0081C6', fontSize: '15px'}}>Nombre</label>
                          </p>
                          <p>
                            <input className="col-12 required" id="name" type="text" name="SECNAME" required />
                            <span />
                            <label htmlFor="secuname" style={{color: '#0081C6', fontSize: '15px'}}>Apellido</label>
                          </p>
                          <p>
                            <input className="col-12" type="text" name="EMAIL" id="name" required />
                            <span />
                            <label htmlFor="email" style={{color: '#0081C6', fontSize: '15px'}}>Correo</label>
                          </p>
                          <p>
                            <input className="col-12 required" type="text" name="PHONE" id="name" defaultValue />
                            <span />
                            <label htmlFor="name" style={{color: '#0081C6', fontSize: '15px'}}>Teléfono</label>
                          </p>
                          {/* <p>
									<input class="col-12 required" type="text" name="PAIS" id="name" class="required" id="mce-PAIS">
									<span></span>
									<label for="name" style="color: #0081C6; font-size: 15px">Pais</label>
								</p> */}
                          <select>
                            <option>Pais</option>
                            <option>Argentina</option>
                            <option>Chile</option>
                            <option>Colombia</option>
                            <option>Ecuador</option>
                            <option>México</option>
                            <option>Panamá</option>
                            <option>Venezuela</option>
                            <option>Otro</option>
                          </select>
                          <div style={{textAlign: 'center'}}>
                            <button type="submit" id="submit" name="submit" className="btn btn-primary center" data-toggle="modal" data-target="#exampleModalCenter">
                              Inicia la aventura
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div>	
                  </div>
                  <div className="col-md-2" />
                </div>  
              </div>
            </div>
          </div>
        </div>
        {/* MAIN CONTAINER */}
      </div>
    );
  }
}

export default Home;


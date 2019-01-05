import React from "react";
import { Switch, Route } from "react-router-dom";
import AllUsers from "../AllUsers";
import Profile from "../Profile";

const Salas = () => (
    <div id="page-content">
        {/* PAGE CONTENT */}
        <div id="page-content">
          <div id="page-header">
            <div className="ken-burns" style={{backgroundImage: 'url(assets/images/Web_Ciexpro_Header_Salones.png)', backgroundPosition: 'center'}} />
            <div className />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <i class="decode-icon-placeholder wow tada" style="color: #0082cb;"></i> */}
                  {/* <h1 style="color: #0082cb;">Salas</h1> */}
                </div>{/* col */}
              </div>{/* row */}
            </div>{/* container */}
          </div>{/* page-header */}
          <div className="container" style={{maxWidth: '600px', paddingBottom: '1%'}}>
            <p>Conoce nuestros espacios, ideales para realizar talleres, conferencias, cursos, videoconferencias, charlas, y actividades innovadoras para el crecimiento personal y profesional </p>
          </div>
          {/* <div class="container" style="max-width: 600px; border-bottom: 2px solid #0082cb">
        <h4 class="text-center">Ventaja de nuestros espacios</h4>
      </div>

      <div class="container" style="max-width: 600px; border-bottom: 2px solid #0082cb">
        <ol>
          <li>Ubicado en una zona empresarial</li>
          <li>Facil acceso en transporte publico o vehiculo particular</li>
          <li>Horarios de uso flexible</li>
          <li>Estacionamiento publico</li>
        </ol>
      </div> */}
          {/* nuevo */}
          <div className="container row" style={{paddingTop: '3%'}}  >
            <div className="col-sm-12">
              <div className="tabs">
                <ul className="nav nav-tabs">
                  <li className="active"><a className="waves" href="#tab-1-1" data-toggle="tab">Campamento Base</a></li>
                  <li><a className="waves" href="#tab-1-2" data-toggle="tab">Ruta Sur</a></li>
                  <li><a className="waves" href="#tab-1-3" data-toggle="tab">Ruta Norte</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-1-1">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="owl-carousel text-slider">
                              {/* <div class="item">

                              <img src="assets/images/Salones/Ciexpro_CampamentoBase_01.jpg" alt="" width="60">

                              

                            </div>
                            <div class="item">

                              <img src="assets/images/Salones/Ciexpro_CampamentoBase_02.jpg" alt="" width="60">

                            </div> */}
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_CampamentoBase_03.jpg" alt width={60} />
                              </div>
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_CampamentoBase_04.jpg" alt width={60} />
                              </div>
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_CampamentoBase_05.jpg" alt width={60} />
                              </div>
                            </div>{/* text-slider */}
                          </div>{/* col */}
                        </div>{/* row */}
                      </div>{/* col */}
                      <div className="col-lg-6">
                        <div className="headline no-margin-bottom">
                          {/* <h6>About us</h6> */}
                          <h3>Campamento Base</h3>
                        </div>{/* headline */}
                        <br /><br />
                        <p>Espacio para charlas, talleres, cursos, conferencias, capacitación de personal, ruedas de prensa, foros, seminarios, entre otros.</p>
                        <p><strong>Capacidad:</strong> Máx 40 personas</p>
                        <p><strong>Mobiliario:</strong> 4 mesas, pódium, proyector, sillas ergonómicas (20), sillas de conferencia (40), 2 pizarras acrílicas, equipo de Audio, TV y Scanner
                        </p><p><strong>Servicios:</strong> Wifi y cables de red, aire acondicionado, baños, refrigerio.</p><p />
                        <br /><br />
                        <div style={{textAlign: 'center'}}>
                          <a href="contact.html"><button type="submit" id="submit" name="submit" className="btn btn-primary center" data-toggle="modal" data-target="#exampleModalCenter">
                              Información
                            </button></a>
                        </div>
                        {/* <p><a class="see-more" href="#">See more</a></p> */}
                        <br className="d-lg-none" />
                      </div>{/* col */}
                    </div>{/* row */}
                  </div>{/* tab-pane */}
                  <div className="tab-pane fade" id="tab-1-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="owl-carousel text-slider">
                              <div className="item">
                                <div>
                                  <img src="assets/images/Salones/Ciexpro_RutaSur_01.jpg" alt width={60} />
                                </div>
                              </div>{/* item */}
                              <div className="item">
                                <div>
                                  <img src="assets/images/Salones/Ciexpro_RutaSur_02.jpg" alt width={60} />
                                </div>
                              </div>{/* item */}
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_RutaSur_03.jpg" alt width={60} />
                              </div>
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_RutaSur_04.jpg" alt width={60} />
                              </div>
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_RutaSur_05.jpg" alt width={60} />
                              </div>
                            </div>{/* text-slider */}
                          </div>{/* col */}
                        </div>{/* row */}
                      </div>{/* col */}
                      <div className="col-lg-6">
                        <div className="headline no-margin-bottom">
                          {/* <h6>About us</h6> */}
                          <h3>Ruta Sur</h3>
                        </div>{/* headline */}
                        <br /><br />
                        <p>Espacio para reuniones corporativas, talleres, cursos, videoconferencias, capacitación de personal o presentaciones de trabajo.</p>
                        <p><strong>Capacidad:</strong> Máx 10 personas</p>
                        <p><strong>Mobiliario:</strong> 3 mesas, Pódium, Proyector, Pizarra Acrílica (marcadores y borrador), Pantalla de Proyección, Equipo de Audio, TV, Scanner.</p>
                        <p><strong>Servicios:</strong> Wifi y cables de red, Aire acondicionado, Baños, Refrigerio</p>
                        <br /><br />
                        <div style={{textAlign: 'center'}}>
                          <button type="submit" id="submit" name="submit" className="btn btn-primary center" data-toggle="modal" data-target="#exampleModalCenter">
                            Información
                          </button>
                        </div>
                        {/* <p><a class="see-more" href="#">See more</a></p>

                      <br class="d-lg-none"> */}
                      </div>{/* col */}
                    </div>{/* row */}
                  </div>{/* tab-pane */}
                  <div className="tab-pane fade" id="tab-1-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="owl-carousel text-slider">
                              {/* <div class="item">

                              <img src="assets/images/Salones/Ciexpro_RutaNorte_01.jpg" alt="" width="60">

                            </div>
                            <div class="item">

                              <img src="assets/images/Salones/Ciexpro_RutaNorte_02.jpg">

                            </div> */}
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_RutaNorte_03.jpg" alt width={60} />
                              </div>{/* item */}
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_RutaNorte_04.jpg" alt width={60} />
                              </div>{/* item */}
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_RutaNorte_05.jpg" alt width={60} />
                              </div>{/* item */}
                              <div className="item">
                                <img src="assets/images/Salones/Ciexpro_RutaNorte_06.jpg" alt width={60} />
                              </div>{/* item */}
                            </div>{/* text-slider */}
                          </div>{/* col */}
                        </div>{/* row */}
                      </div>{/* col */}
                      <div className="col-lg-6">
                        <div className="headline no-margin-bottom">
                          {/* <h6>About us</h6> */}
                          <h3>Ruta Norte</h3>
                        </div>{/* headline */}
                        <br /><br />
                        <p>Espacio para reuniones corporativas, talleres, cursos, videoconferencias, capacitación de personal o presentaciones de trabajo.</p>
                        <p><strong>Capacidad:</strong> Máx 8 personas</p>
                        <p><strong>Mobiliario:</strong>Mesa de reuniones, Pizarra Acrílica (marcadores y borrador), Pantalla de Proyección, Equipo de Audio, TV, Scanner.</p>
                        <p><strong>Servicios:</strong> Wifi y cables de red, Aire acondicionado, Baños, Punto de hidra</p>
                        <br /><br />
                        <div style={{textAlign: 'center'}}>
                          <button type="submit" id="submit" name="submit" className="btn btn-primary center" data-toggle="modal" data-target="#exampleModalCenter">
                            Información
                          </button>
                        </div>
                      </div>{/* col */}
                    </div>{/* row */}
                  </div>{/* tab-pane */}
                </div>{/* tab-content */}
              </div>{/* tabs */}
            </div>{/* col */}
          </div>{/* row */}
        </div>{/* container */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-8">
                <i className="decode-icon-ranking" />
                <div className="service-box-content">
                  {/* <h5><a href="single-service.html">Well Documented</a></h5> */}
                  <h3 style={{color: '#fff', fontSize: '20px'}}>Ventajas de nuestros espacios</h3> <br />
                  <p>Ubicado en una zona empresarial de fácil acceso en transporte público o vehículo particular</p>
                </div>{/* service-box-content */}
              </div>{/* service-box */}
            </div>{/* col */}
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-8">
                <i className="decode-icon-ranking" />
                <div className="service-box-content">
                  {/* <h5><a href="single-service.html">Well Documented</a></h5> */}
                  <h3 style={{color: '#fff', fontSize: '20px'}}>Ventajas de nuestros espacios</h3> <br />
                  <p>Estacionamiento público</p>
                </div>{/* service-box-content */}
              </div>{/* service-box */}
            </div>{/* col */}
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-8">
                <i className="decode-icon-ranking" />
                <div className="service-box-content">
                  {/* <h5><a href="single-service.html">Well Documented</a></h5> */}
                  <h3 style={{color: '#fff', fontSize: '20px'}}>Ventajas de nuestros espacios</h3> <br />
                  <p>Salones adaptados a cualquier tipo de inducción, evento o reunión corporativa con horarios de uso flexible</p>
                </div>{/* service-box-content */}
              </div>{/* service-box */}
            </div>{/* col */}
          </div>{/* row */}
        </div>{/* container */}
      </div>
);

export default Salas;
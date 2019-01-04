import React from "react";
import { Switch, Route } from "react-router-dom";


import Home from "../Home";
import Users from "../Users";
import About from "../About";
import Salas from "../Salas";
import EbootCamp from "../eBootCamp";
import Emaster from "../eMaster";
import PreguntasFrecuentes from "../PreguntasFrecuentes";
import Contacto from "../Contacto";
import TerminosCondiciones from "../TerminosCondiciones";




const Main = () => (
   
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
            <Route path="/salas" component={Salas} />
            <Route path="/ebootcamp" component={EbootCamp} />
            <Route path="/emaster" component={Emaster} />
            <Route path="/preguntas_frecuentes" component={PreguntasFrecuentes} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/terminos_condiciones" component={TerminosCondiciones} />
        </Switch>
);

export default Main;
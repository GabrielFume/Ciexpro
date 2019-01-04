import React from "react";
import { Switch, Route } from "react-router-dom";
import AllUsers from "../AllUsers";
import Profile from "../Profile";

const Contacto = () => (
    <div id="page-content">
        <div id="page-header">
          <div className="ken-burns" style={{backgroundImage: 'url(assets/images/Terminos_condiciones.jpg)', backgroundPosition: 'center', top: '-50px'}} />
          <div className />
        </div>
        <div className="container">
          <div style={{borderBottom: 'solid 2px #5B5B5F'}}>
            <h1 style={{color: '#5B5B5F', fontSize: '34px'}}>Terminos y condiciones de servicio</h1>
          </div>
          <div style={{paddingTop: '3%'}}>
            <h4 style={{color: '#5B5B5F'}}>Terminos de uso</h4>
            <p style={{paddingTop: '2%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis dolor nec dolor tempor interdum et et diam. Nunc quis enim in ante lacinia finibus vitae ut nisi. Integer pretium dolor ut ex ullamcorper hendrerit. Ut at consequat diam. Fusce ac odio pharetra, mollis mauris eleifend, congue leo. Suspendisse commodo dolor sit amet elit aliquet tempor. Proin sit amet mi a ante rhoncus suscipit. Phasellus molestie tellus enim, at posuere sem imperdiet vitae. Quisque non bibendum lacus, eget congue justo. Proin at elit massa. Aliquam non faucibus magna, sed gravida metus. Nam tincidunt, quam eget egestas pulvinar, justo mauris dapibus ante, in ornare libero metus non dolor.</p>
            <p>Donec nec mi fringilla, interdum ligula in, luctus dolor. Fusce egestas est quis elementum finibus. Donec in velit volutpat velit tempus consequat id vitae justo. Praesent sollicitudin, sapien sit amet auctor porttitor, ex diam ornare justo, in lobortis neque augue sit amet ipsum. Maecenas rutrum sed est sit amet rutrum. Sed ornare, purus ut egestas molestie, augue turpis tincidunt sapien, eu interdum nulla purus nec justo. Aliquam vulputate felis et bibendum dapibus. In id laoreet ante. Morbi varius, ante ac ultrices ultricies, est massa iaculis elit, nec sollicitudin nunc risus sit amet dolor. Donec vitae tellus eu lacus maximus feugiat sit amet eu dui.</p>
            <p>Fusce scelerisque fringilla libero id imperdiet. Suspendisse et tincidunt risus. Praesent mollis tellus ac sem elementum faucibus. Nam luctus diam accumsan, commodo sem a, condimentum nibh. In bibendum lorem sed nisl vulputate, feugiat tempor nisi dictum. Aliquam accumsan eros dictum orci rhoncus, eu luctus arcu aliquam. Proin dictum ligula ut mi pretium tristique. Morbi dictum luctus leo, sit amet sodales ante cursus ut. Cras consequat, nunc ac placerat viverra, sem lorem viverra enim, eu blandit metus metus ut augue.</p>
            <p>Ut scelerisque luctus libero. Praesent consequat elementum ipsum ac fermentum. Fusce massa elit, auctor vitae consequat eget, vehicula id orci. Proin accumsan lobortis mauris sed scelerisque. Integer et lorem luctus, ultricies elit vitae, ultrices risus. In lorem eros, consectetur non interdum non, tempor sed neque. Nunc non justo nisi. Nunc vestibulum posuere posuere. Etiam eu magna ut erat vestibulum malesuada. Etiam sit amet mattis sapien. Donec nisl lorem, facilisis vitae sollicitudin ut, gravida vel sapien.</p>
            <p>Vestibulum placerat, nulla eu tincidunt eleifend, ipsum lorem semper nisi, in fermentum dui metus at risus. Curabitur fermentum, erat at interdum interdum, nibh ligula pulvinar est, et cursus mi leo nec felis. Sed in mi quis urna scelerisque pulvinar. Pellentesque libero mi, iaculis ut consectetur viverra, scelerisque nec felis. Mauris sollicitudin accumsan ipsum ac ullamcorper. Praesent id nulla aliquam sem venenatis pretium. In convallis enim in eros laoreet, eu pharetra felis viverra.</p>
          </div>
        </div>
      </div>
);

export default Contacto;
import React, { Component } from 'react';
import Footer from '../components/Footer';

class Competence extends Component {
    render () {
    return ( 
        <div className="condiv">
            <h1 className="subtopic">Compétences</h1>
            <h1>Voici une liste de mes compétences</h1>
            <ul>
                <li>PHP</li>
                <li>React</li>
                <li>Node</li>
                <li>Vue</li>
                <li>Javascript</li>
                <li>Html5</li>
                <li>Css3</li>
            </ul>
           <Footer /> 
        </div>
        )
    }
}
 
export default Competence;
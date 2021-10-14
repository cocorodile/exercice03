import React, { Component } from 'react';
import Footer from '../components/Footer';
import Widecard from '../components/Widecard';


class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Mon éducation</h1>
            <Widecard title="AEC" where="Institut Demers" from="Il y a longtemps" to="Il y a longtemps"/>
            <Widecard title="AEC" where="Institut Demers" from="Il y a longtemps" to="Il y a longtemps"/>
            <Footer />
            </div>
            )
        }
    }
    
export default Education
    
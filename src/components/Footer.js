import React, { Component } from 'react'
import { Facebook, Instagram, Linkedin, Youtube } from 'react-bootstrap-icons';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
            <Facebook className="icons" width="35" height="35" />
            <Instagram className="icons" width="35" height="35"/>
            <Youtube className="icons" width="35" height="35"/>
            <Linkedin className="icons" width="35" height="35"/>
            </div>
            )
        }
    }
    
export default Footer
    
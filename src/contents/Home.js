import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../components/Footer';
import profilepic from '../img/2438127.jpeg';




class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Je suis Martin Dufresne','Je suis développeur web']} speed={100} eraseDelay={700}/>
            <Footer />
            </div>
            )
        }
    }
    
    export default Home
    
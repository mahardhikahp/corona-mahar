import React, {Component} from 'react'
import foto from '../img/5245.jpg'
import {Container, Typography} from '@material-ui/core';
import email from '../../icon/gmail.svg'
import whatsapp from '../../icon/whatsapp.svg'

import './Contact.css'

class Contact extends Component{
    render(){
        return(
            <Container>
            <div className="foto-part">
                <img src={foto} className="foto"></img>
            </div>

            <div className="biografi">
                <Typography variant="h3" style={{color:"#277bb1", fontWeight:"bold"}}>Mahardhika Hendri Putra</Typography>
                <Typography variant="button" style={{fontWeight:"bold", fontSize: "18px"}}>A Self-Proclaimed UI/UX Designer and Front End Developer</Typography>
                <Typography>Don't hesitate to contact me!</Typography>

                <div className="contacts">
                <img src={email} className="image"></img>
                <p><strong>2008madik@gmail.com</strong></p><br/>
                <img src={whatsapp} className="image"></img>
                <p><strong>081385623783</strong></p>
                </div>
            </div>
            </Container>
            
        )
    }
}

export default Contact;
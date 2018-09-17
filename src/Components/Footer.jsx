import React from "react";
import { Icon, Card } from 'semantic-ui-react';
import "../App.css";


class Footer extends React.Component {
    render() {
       return (
           <Card className='custFooter' style={{padding:'1vh', backgroundColor:"#EDF5E1"}} fluid>
          <Card.Content textAlign='center' className="">
            <p className='teamName'>By ScrumTeam1: <Icon name ='copyright' size="small" /></p>

            <p className='developers'>Patrick Hanson</p>
            <p className='developers'>Kyle Meiklejohn</p>
            <p className='developers'>Travis Anderson</p>
            <p className='developers'>David Stewart</p>
            <p className='developers'>Adrian Luley</p>
             
            <p className="address">
              47 S Meridian St, Indianapolis, IN 46204
            </p>
          
          </Card.Content>
          </Card>
         
       );
    }
 }

 export default Footer;
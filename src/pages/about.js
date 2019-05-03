import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components'

const AboutMain = styled.article`
background-color: #697b8e;
max-width: 90%;
margin: 1rem auto;
display: grid;
grid-template-columns: 3fr 1fr;
grid-gap: 40px;
color: white;
font-family: "Arial Black", Gadget, sans-serif;
box-shadow: 0px 2px 10px rgba(25, 17, 34, 0.4);
border-radius: 4px;
padding: 20px;



`

const About = ({location}) => (
    <Layout location={location} >
    <AboutMain>
    <div>
        <h1>About Us</h1>
        <p>
        Lorem ipsum dolor amet man braid ethical pabst quinoa skateboard gastropub occupy. 
        Post-ironic actually +1 plaid brooklyn fashion axe kinfolk messenger bag gochujang narwhal migas cardigan. 
        Trust fund shoreditch 90's taxidermy leggings bespoke sartorial pinterest small batch ennui. Tofu drinking vinegar small batch activated charcoal wayfarers, shabby chic hexagon skateboard man braid readymade fashion axe tousled ethical venmo polaroid. Chicharrones everyday carry pabst brunch enamel pin hell of PBR&B 8-bit blog wolf messenger bag shoreditch. Letterpress snackwave chillwave swag. Prism tote bag green juice hashtag tofu fingerstache street art.

        Oh. You need a little dummy text for your mockup? How quaint.
        I bet you’re still using Bootstrap too…  
        </p>
    </div>
    </AboutMain>
    </Layout>
)

export default About

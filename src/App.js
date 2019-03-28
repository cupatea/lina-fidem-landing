//core
import "bootstrap/dist/css/bootstrap.min.css";
//front10 components
import "@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css";

import "./App.css";

import React, { Component } from "react";

import {
  Header,
  Container,
  Hero,
} from "@front10/landing-page-book/dist/components";

import { SocialIcon } from 'react-social-icons'

class App extends Component {
  render() {
    return (
      <Hero
        backgroundColor="#FAFAFA"
        image="/images/landing/photo.jpg"
        minHeight="100vh"
        particles={ false }
      >
        <Container>
          <Header className="text-white" type="h1">
            Lina Fidem
          </Header>
          <Header className="text-white" type="h5">
            Director and videographer
          </Header>
          <div className="pt-2">
            <SocialIcon network="email" bgColor="#FAFAFA" className="mx-2" url="mailto:linafidem@gmail.com"/>
            <SocialIcon network="instagram" bgColor="#FAFAFA" className="mx-2" url="https://www.instagram.com/linafidem" />
          </div>
        </Container>
      </Hero>
    );
  }
}

export default App;

import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Container from '../Container';
import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';
import './Layout.css';

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar title="Sobre mim" description="Sou um desenvolvedor apaixonado por JavaScript e amo desenvolver produtos que melhoram a vida das pessoas."/>
          <Sidebar title="Sobre o blog" description="Aqui você encontará muito conteúdo de FrontEnd e CSS, além de umas dicas senasacionais de carreira!"/>
        </aside>
      </Container>
    </main>
  </div>
);



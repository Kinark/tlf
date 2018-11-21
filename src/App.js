import React from 'react';
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom';
import { Title, Metas } from '~/components/Metas';
import Favicon from '~/components/Favicon';
import { loadReCaptcha } from 'react-recaptcha-v3'

import { AppContext } from '~/instances/context';
import variables from '~/instances/variables';

import PageTitle from '~/components/PageTitle';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

import Home from '~/views/Home';
import Contact from '~/views/Contact';
import About from '~/views/About';
import Games from '~/views/Games';
import Game from '~/views/Game';
// import Deeplake from '~/views/Deeplake';

import styles from './styles.scss'
import './styles.global.scss';
import './components/Ceres/styles.global.scss';

class App extends React.Component {
   state = {
      inverted: false,
      appTitle: 'The Last Flame',
      appTitleBar: true
   }

   componentDidMount = () => loadReCaptcha(variables.recaptchaCode)

   turnOnInverted = () => { this.setState({ inverted: true }); };

   turnOffInverted = () => { this.setState({ inverted: false }); };

   changeAppTitle = (appTitle, appTitleBar = true) => { this.setState({ appTitle, appTitleBar }); };

   render() {
      const { inverted, appTitle, appTitleBar } = this.state;
      const { turnOnInverted, turnOffInverted, changeAppTitle } = this;
      const description = 'The Last Flame is a indie game development company. We hope to lit your way and make you fall in love with our games :)';
      return (
         <AppContext.Provider value={{ inverted, appTitle, appTitleBar, turnOnInverted, turnOffInverted, changeAppTitle }}>
            {/* <Favicon /> */}
            <Title>{appTitle}</Title>
            {/* <Metas description={description} /> */}
            <div id="content" className={`${styles.appColors} ${inverted ? styles.inverted : ''}`}>
               <Route path="/(.+)" component={Navbar} />
               {appTitleBar === true && <PageTitle />}
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/about" component={About} />
                  <Route path="/games" component={Games} />
                  <Route path="/game/:gameTitle" component={Game} />
                  {/* <Route path="/deeplake" component={Deeplake} /> */}
               </Switch>
            </div>
            <div id="footer">
               <Footer />
            </div>
         </AppContext.Provider>
      );
   }
}

export default hot(module)(App)

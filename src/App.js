import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Papa from 'papaparse';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import data from './data/data';
import Navmenu from './Components/Nav';
import Home from './Pages/Home';
import Movimento from './Pages/Movimento';
import Category from './Pages/Category';
import ScrollToTop from './Components/ScrollToTop';
import Laboratorio from './Pages/Laboratorio';
import Participe from './Pages/Participe';
import Footer from './Components/Footer';

data.categories.antidotos.videos = [];
data.categories.clima.videos = [];
data.categories.consumo.videos = [];
data.categories.democracia.videos = [];
data.categories.insurreicao.videos = [];

class App extends Component {
  state = {
    data: data,
    lang: 'pt',
    videosToFetch: [
      {
        category: 'antidotos',
        url:
          'https://raw.githubusercontent.com/associacaosilo/liberteofuturo-site/gh-pages/_data/antidoto.csv',
      },
      {
        category: 'clima',
        url:
          'https://raw.githubusercontent.com/associacaosilo/liberteofuturo-site/gh-pages/_data/clima.csv',
      },
      {
        category: 'consumo',
        url:
          'https://raw.githubusercontent.com/associacaosilo/liberteofuturo-site/gh-pages/_data/consumo.csv',
      },
      {
        category: 'democracia',
        url:
          'https://raw.githubusercontent.com/associacaosilo/liberteofuturo-site/gh-pages/_data/democracia.csv',
      },
      {
        category: 'insurreicao',
        url:
          'https://raw.githubusercontent.com/associacaosilo/liberteofuturo-site/gh-pages/_data/insurreicao.csv',
      },
    ],
  };
  componentDidMount() {
    this.state.videosToFetch.map((item) => {
      Papa.parse(item.url, {
        download: true,
        header: true,
        complete: (results) => {
          var res = results.data;
          data.categories[item.category].videos = res;
          this.setState({ data });
        },
      });
    });
  }
  _handleLang = (selectedLang) => {
    const lang = selectedLang;
    this.setState({ lang });
  };
  render() {
    const settings = {
      data: this.state.data,
      lang: this.state.lang,
    };
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navmenu
            {...settings}
            navClass=""
            onChangeLang={(selectedLang) => this._handleLang(selectedLang)}
          />
          <Switch>
            <Route path="/category/:slug">
              <Category {...settings} />
            </Route>
            <Route path="/movimento">
              <Movimento {...settings} />
            </Route>
            <Route path="/laboratorio">
              <Laboratorio {...settings} />
            </Route>
            <Route path="/participe">
              <Participe {...settings} />
            </Route>
            <Route path="/">
              <Home {...settings} />
            </Route>
          </Switch>
          <Footer
            {...settings}
            onChangeLang={(selectedLang) => this._handleLang(selectedLang)}
          />
        </div>
      </Router>
    );
  }
}

export default App;

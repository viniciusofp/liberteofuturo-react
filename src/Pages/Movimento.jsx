import React, { Component } from 'react';
import PageHero from '../Components/PageHero';
import { Container, Row, Col } from 'reactstrap';
import Papa from 'papaparse';
import _ from 'lodash';

class Movimento extends Component {
  state = {};
  componentDidMount() {
    const formularioUrl =
      'https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vR_L0sPFQ4BBuos5uLcNoGbAx3T5keHm4qh-EtFP3jIEqGz3qVMnf_SxBRvU2iJ5wgA_7lYmsVccL1A/pub?output=csv';

    Papa.parse(formularioUrl, {
      download: true,
      header: true,
      complete: (results) => {
        var res = results.data;
        const nomeKey = '1. Com que nome você gosta de ser chamadx?';
        const authKey =
          'Você autoriza, de forma gratuita, o uso da sua imagem, nome e voz, constante no vídeo ora compartilhado, para composição de material de divulgação do movimento sobre as "5 propostas para adiar o fim do mundo", sem que nada haja a ser reclamado a título de direitos conexos à minha imagem ou a qualquer outro?';
        var quemSomos = _.filter(res, [authKey, 'Eu autorizo/I authorize']);
        quemSomos = quemSomos.map((person) => {
          return { nome: person[nomeKey] };
        });
        console.log(res, quemSomos);
      },
    });
  }
  render() {
    const { data, lang } = this.props;
    const movimento = data.pages.movimento[lang];
    return (
      <div className="movimentopage">
        <PageHero
          logo={`/assets/logos/logo_vertical.svg`}
          descricao={movimento.subtitulo}
          titulo={movimento.titulo}
        />
        <div className="page_content">
          <Container>
            <Row>
              <Col lg="12">{movimento.content}</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Movimento;

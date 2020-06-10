import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AboutLGPD() {
  return (
    <>
      <aside className="info-card">
        <div className="info-card-header">
          <Link className="return-path" to="/home">
            <i className="svg-icon">
              <FiArrowLeft />
            </i>
          </Link>
          <h2 className="typo-display-2 typo-color-dark-secondary">
            Cronogramas
          </h2>
        </div>
        <div className="info-card-body -fr1 -first">
          <h3 className="typo-sub-heading _text-center typo-color-dark-secondary">
            Eventos iniciais
          </h3>
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-secundary">
              A Lei de Proteção de Dados Pessoais foi sancionada no dia 14 de agosto de 2018, seguindo ainda
              em 2018 o deputado Carlos Bezerra propôs que a data entraria em vigor em agosto de 2020 para 15 de agosto de 2022,
              ou seja 2 anos após o previsto, pois apenas uma pequena parcela das empresas nacionais haviam se adequado mesmo após dez meses dessa lei ter entrado em vigor.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <h3 className="typo-sub-heading _text-center typo-color-dark-secondary">
            Adiamento da LGPD
          </h3>
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-secundary">
              Porem no dia 03/04 de 2020 o Senado Federal aprovou o projeto "PL" que dispõe sobre o Regime Jurídico Emergencial e
              Transitório das relações jurídicas de Direito Privado (RJET) no período da pandemia do COVID-19.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-secundary">
              Com isso  estabeleceu-se  que o projeto será adiado por mais 18 meses, tendo assim iniciativa em agosto de 2021.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <h3 className="typo-sub-heading _text-center typo-color-dark-secondary">
            Eventos realizados
          </h3>
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-secundary">
              <span className="typo-color-contrast typo-sub-heading _pb-sm">
                Primeiro congresso da LGPD:
              </span>
              <br />
              O primeiro congresso sobrea a LGPD ocorreu nos dias 23 e 24 de outubro de 2019 e foi realizado com o intuido de nos dar uma visão geral dos impactos desta nova lei no mercado de trablho. <br />
              Foram tambem indicados possíveis métodos e atitudes para se previnir de problemas futuros.
              O evento serviu de oportunidade para diversos profissionais e estudandes se atualizarem e conhecerem essa nova oportunidade na carreira como DPO, analistas de sistemas, e até mesmo Gestores.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 _mt-sm typo-color-dark-secundary _pb-sm">
              <span className="typo-color-contrast typo-sub-heading">
                Compliance summit
              </span>
              <br />
              O compliance summit  ocorreu No dia 7 de maio de 2020
              este evento reuniu profissionais de compilance de são paulo onde discutiram a pratica e implementação pratica do compliance
              dentre os temas que foram discutidos estava a LGPD
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-secundary">
              <span className="typo-color-contrast typo-sub-heading _pb-sm">
                Lei Geral de Proteção de Dados (LGPD):
              </span>
              <br />
             Foi um econtro realizado em São Paulo feito para ajudar profissionais na area de compilance a se adequarem a nova LGPD, e na formulação
             de regras e boas práticas para a adequação a lei.
             <br />
             O evento ocorreu no dia 24 de abril de 2020.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <h3 className="typo-sub-heading _text-center typo-color-dark-secondary">
            Eventos adiados
          </h3>
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-secundary">
              <span className="typo-color-contrast typo-sub-heading _pb-sm">
                1º Brazilian Data Protection and Privacy Summit:
              </span>
              <br />
              Esse evento que ocorrá em São Paulo com sua primeira edição, e busca sanar as dúvidas que surgiram conforme novas regras e legislações
              sobre as privacidades de dados. O evento que está sendo organizado pela ESENI e o instituto ARC que deveria ocorree nos dias 04 e 05 de junho de 2020
              foi adiado para os dias 05 e 06 de agosto do mesmo ano.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-secundary">
              <span className="typo-color-contrast typo-sub-heading _pb-sm">
                CPDP Latam 2020:
              </span>
              <br />
              O CPDP Latam 2020 que contará com as edições latino-americanas das conferências Computers, Privacy and Data Protection, MyData e Privacy Law Scholars Conferece (PLSC),
              ocorrerá no Rio de Janeiro com foco sobre a proteção de dados na América Latina, contará com questões sobre democracia, inovação e regulação.
              <br />
              O evento foi adiado dos dias 23,24 e 25 de junho de 2020 para 2021 sem data confirmada devido a epidemia e outros fatores.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <h3 className="typo-sub-heading _text-center typo-color-dark-secondary">
            Eventos sem data
          </h3>
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-secundary">
              <span className="typo-color-contrast typo-sub-heading _pb-sm">
                11º Seminário De Proteção à Privacidade e aos Dados Pessoais:
              </span>
              <br />
              este evento que ocorrerá em são paulo tera como tema principal a LGPD,ira contar com profissionais reconhecidos internacionalmente e será realizado pelo comitê gestor da internet
              no Brasil(CGI.BR),e tambem o núcleo de informaçães de coordenação do ponto BR (NIC.br)
            </p>
          </div>
        </div>
      </aside>
    </>
  );
} 
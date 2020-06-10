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
            Dicas e bons costumes
          </h2>
        </div>

        <div className="info-card-body -fr1 -first">
          <div className="text-card">
            <p className="text typo-headline typo-color-dark-primary">
              A privacidade e proteção de dados são assuntos de extrema relevância no momento,
              Como colocar isso em prática quando falamos de desenvolvimento de sistemas e tecnologia?
            <br />
            Utilizando o Privacy by Design.
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <h3 className="typo-sub-heading _text-center typo-color-dark-secondary">
          Privacy by Design
            </h3>
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              É uma metodologia na qual a proteção de dados pessoais é pensada desde a concepção de sistemas.
              <br />
              Seu conceito foi resumido e simplificado em 7 princípios básicos:
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <div className="text-card">
            <h3 className="typo-sub-heading typo-color-contrast _mb-sm">
              1º Ser proativo e não reativo (prevenir e não remediar):
            </h3>
            <p className="text typo-body-2 typo-color-dark-primary">
              Prever e antecipar eventos que possam comprometer a privacidade antes que eles ocorram
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <div className="text-card">
            <h3 className="typo-sub-heading typo-color-contrast _mb-sm">
              2º Privacidade como configuração padrão:
            </h3>
            <p className="text typo-body-2 typo-color-dark-primary">
              Por padrão, as configurações referentes à privacidade devem estar definidas considerando a máxima proteção possível da privacidade do usuário.
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <div className="text-card">
            <h3 className="typo-sub-heading typo-color-contrast _mb-sm">
             3º Privacidade incorporada ao projeto
            </h3>
            <p className="text typo-body-2 typo-color-dark-primary">
            A proteção dos dados pessoais deve ser pensada como parte indispensável do projeto de arquitetura
            do sistema ou da prática de negócio,ou seja, desde a concepção.
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <div className="text-card">
            <h3 className="typo-sub-heading typo-color-contrast _mb-sm">
             4º Funcionalidade total – “Soma-positiva” ao invés de soma-zero
            </h3>
            <p className="text typo-body-2 typo-color-dark-primary">
            Esse princípio visa garantir a proteção de dados pessoais em consonância com os legítimos interesses e objetivos
            daqueles que utilizam as informações, sem a necessidade de se fazer trocas desnecessárias como, por exemplo,
            abrir mão da segurança para conseguir mais dados.
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <div className="text-card">
            <h3 className="typo-sub-heading typo-color-contrast _mb-sm">
             5º Segurança de ponta a ponta
            </h3>
            <p className="text typo-body-2 typo-color-dark-primary">
            A segurança das informações pessoais deve ser garantida desde a coleta do dado até
            sua destruição ou compartilhamento com um terceiro.
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <div className="text-card">
            <h3 className="typo-sub-heading typo-color-contrast _mb-sm">
            6º Visibilidade e transparência
            </h3>
            <p className="text typo-body-2 typo-color-dark-primary">
            Abrange diversos aspectos, como informar ao titular do dado quando e para qual finalidade as suas informações
            estão sendo coletadas até a abertura da plataforma para que entidades independentes possam
            realizar auditorias e certificar-se de que as informações pessoais estão de fato protegidas.
            </p>
          </div>
        </div>

        <div className="info-card-body -fr1">
          <div className="text-card">
            <h3 className="typo-sub-heading typo-color-contrast _mb-sm">
            7º Respeito pela privacidade do usuário (solução centrada no usuário)
            </h3>
            <p className="text typo-body-2 typo-color-dark-primary">
            Toda a arquitetura e operacionalidade do sistema ou da prática de negócio devem ser centradas na privacidade do usuário,
            oferecendo medidas robustas de proteção de dados, notificando-o de forma clara e oportuna e
            tornando as configurações referentes à privacidade amigáveis.
            </p>
          </div>
        </div>

      </aside>
    </>
  );
}
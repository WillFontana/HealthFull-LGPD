import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AboutLGPD(props) {
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
            Direitos e Deveres
          </h2>
        </div>



        <div className="info-card-body -fr1 -first">
          <h3 className="text typo-headline typo-color-dark-primary _text-center">
            Deveres do Manipulador
          </h3>
          <div className="text-card">
            <p className="text typo-headline typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Mapeamento e Segurança de Dados:</span> <br /> Saber onde estão armazenados os dados coletados e por onde passam até chegar ao servidor.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Prevenção:</span> <br /> Que as empresas adotem medidas prévias para evitar a ocorrência de danos em virtude do tratamento de dados pessoais.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Política de Segurança:</span> <br /> O Termo de uso da empresa serão público, seja interno ou externo. Descritos os dados coletados e a forma que ficarão armazenados e quem terá acesso a eles, além de por quanto tempo serão retidos e como serão destruídos depois.
           </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Adequação:</span> <br /> Os dados pessoais que são tratados deverão ser compatíveis com a finalidade informada pela empresa.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Livre Acesso:</span> <br /> Conceder ao titular a consulta de todos os dados que detenha a seu respeito.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Qualidade dos dados:</span> <br /> Garantir que as informações que a empresa tenha são verdadeiras e atualizadas.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Transparência:</span> <br /> A empresa não pode compartilhar dados pessoais com outras pessoas de forma oculta. Se repassados, mesmo que sejam essenciais para executar um serviço, o cliente deve ser informado.
            </p>
          </div>
        </div>


        <h4 className="text typo-headline typo-color-dark-primary _text-center _mt-lg">
          Direitos do Usuário
        </h4>


        <div className="info-card-body -fr1">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Confirmação e Acesso:</span> <br /> Solicitar a confirmação da existência de tratamento e acesso aos sus dados pessoais através de informações claras sobre a origem dos dados, a inexistência de registro, os critérios utilizados e a finalidade do tratamento.
            </p>

            <div className="divider-contrast"></div>

            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Correção:</span> <br /> Requerer a correção de dados incompletos, inexatos ou desatualizados.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Portabilidade:</span> <br /> Solicitar a transferência dos seus dados pessoais a outro fornecedor de serviço ou produto.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Compartilhamento:</span> <br /> Receber informações sobre entidades publicas e privadas com as quais os seus dados pessoais são compartilhados.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Explicação:</span> <br /> Informações sobre a possibilidade e as consequências de não fornecer o seu consentimento sobre determinada operação de tratamento de seus dados pessoais.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Oposição:</span> <br /> Opor-se ao tratamento de seus dados pessoais quando realizado em descumprimento à LGPD.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Eliminação:</span> <br /> Garantida a desvinculação dos dados pessoais, de requerer a suspensão temporária de qualquer operação de tratamento deles ou de solicitar a exclusão de um dado ou conjunto de dados pessoais, quando estes forem desnecessários, excessivos ou tratados em desconformidade com a LGPD.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast">Revisão Automatizada:</span> <br /> Solicitar informações claras a respeito dos critérios e dos procedimentos utilizados para a tomada de decisão com base em tratamento automatizado de dados pessoais que afetem seus interesses, tais como decisões destinadas a definir seu perfil pessoal, profissional, de consumo e de crédito ou ainda os aspectos de sua personalidade.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
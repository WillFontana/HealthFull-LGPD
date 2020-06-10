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
            Sobre LGPD
          </h2>
        </div>
        <div className="info-card-body -fr1 -first">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
            <span className="typo-sub-heading typo-color-contrast _mb-sm">O que é a LGPD:</span> 
            <br/>
            <br/>
            A preocupação com a segurança dos dados é grande.
            Seguindo tendência internacional, o Brasil sancionou, no ano passado, a Lei Geral de Proteção de Dados.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
            <span className="typo-sub-heading typo-color-contrast">Segurança:</span> 
            <br/>
            <br/>
            Você ia ficar confortável sabendo que uma empresa sabe, sem você ter enviado qualquer informação, seu endereço, sua renda mensal e seus hábitos de consumo? Provavelmente não.
            Por exemplo a coleta das informações é possível por causa de uma brecha nos termos e condições do site, que dizia que nenhum dado coletado da rede poderia ser vendido. 
            </p>
          </div>
        </div> 
        <div className="info-card-body -fr1">
          <div className="text-card">
            <p className="typo-body-2 typo-color-dark-primary">
            <span className="typo-sub-heading typo-color-contrast">Informação e explicação sobre o uso das informações:</span> 
            <br/>
            <br/>
            O direito à informação é aquele que prevê a transparência na hora de saber quais os dados serão tratados e por quê.
            As empresas, com a LGPD, serão obrigadas a deixar claro o porquê dela armazenar os seus dados, por quanto tempo ele ficará guardado e o que pode ser feito caso você mude de ideia.
            É direito do consumidor poder retificar, cancelar ou excluir da posse da empresa qualquer dado pessoal, e a qualquer momento.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
            <span className="typo-sub-heading typo-color-contrast _mb-sm">Instituições financeiras:</span> 
            <br/>
            <br/>
            Com a LGPD, os titulares dos dados pessoais podem solicitar a portabilidade, ou seja, eles podem pedir para que as suas informações saiam daquela empresa e sejam transferidas para outro serviço.
            Essa autorização deve ser enviada pelo cliente seguindo, também, o direito à informação. Ou seja, nenhuma cláusula pode ser estar nas entrelinhas.
            </p>
          </div>
        </div>
        <h2 className="typo-headline _mt-lg _ml-lg typo-color-dark-secondary">
        
        </h2>
       
      </aside>
    </>
  );
}
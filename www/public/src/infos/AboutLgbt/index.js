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
            <p className="text typo-headline typo-color-dark-primary">
              Na Era Digital, a preocupação com a segurança dos dados é grande. Seguindo tendência internacional,
              o Brasil sancionou, no ano passado, a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              O debate sobre assunto surgiu em 2010, mas ficou ainda mais forte em 2018, quando a
              União Europeia criou normas de regulamentação do uso de dados.
              <br />
              O que diz a lei? Quando ela passa a valer? Quem vai ter se adaptar? Durante o texto, vamos explicar
              tudo que você precisa saber sobre LGPD. Confira.
            </p>
          </div>
        </div>
        <h2 className="typo-headline _mt-lg _ml-lg typo-color-dark-secondary">
          O caso da Cambridge Analytica
        </h2>
        <div className="info-card-body -fr1">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              Antes de entrar propriamente na conversa sobre LGPD, é importante entender de
              onde saiu a necessidade de criar uma lei para regulamentação de dados.
              Em março de 2018, tablóides do mundo todo denunciaram o vazamento sem precedentes
              das informações de 50 milhões de usuários do Facebook.

            </p>
          </div>
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              Os dados foram enviados sem o consentimento de nenhum desses usuários pela empresa americana Cambridge Analytica
              para fazer propaganda política.
              Você ia ficar confortável sabendo que uma empresa sabe, sem você ter
              enviado qualquer informação, seu endereço, sua renda mensal e seus hábitos de consumo? Provavelmente não.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
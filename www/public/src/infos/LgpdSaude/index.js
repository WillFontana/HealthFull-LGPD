import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function LGPDnaSaude() {
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
            LGPD na saúde
          </h2>
        </div>
        <div className="info-card-body -fr1 -first">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast _mb-sm">O que as empresas de saúde precisam saber sobre a Lei Geral de Proteção de Dados (LGPD):</span>
              <br />
              <br />
            Não tenha dúvida sobre a importância da LGPD;
            Quando uma empresa estabelece contato com diferentes stakeholders, essas pessoas fornecem seus dados pessoais. Então, preserve essa relação de confiança. O vazamento dos dados ou uso inadequados deles podem, em alguns casos, gerar danos irreparáveis aos envolvidos. Somente isso já é um forte argumento para se tornar um adepto da LGPD.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              A nova lei dará segurança jurídica às pessoas, enquanto gradativamente irá extinguir as práticas ilegais com relação ao uso de dados dos cidadãos, como o cookie pool e a venda de lista de dados. A ideia é que, com o tempo, o Brasil possa ser visto como referência na segurança de dados e, assim, atrair parcerias internacionais de países que também prezam pelas boas práticas relacionadas aos dados dos cidadãos.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1 ">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast _mb-sm">Não adquira qualquer dado sem consentimento:</span>
            </p>
            <br />
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Formulário de consentimento com frases genéricas – Não será aceita pela LGPD frases que digam algo, como “autorizo o livre uso de meus dados de saúde para fins de pesquisa”. É preciso informar qual será a pesquisa, a que se destina, a quem beneficiará, quais pessoas terão acesso aos dados, quando e como será divulgada, entre outros detalhes.
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Impedir que o cliente peça a exclusão de seus dados da lista – Opte por criar um mecanismo que facilite o descadastramento do cliente da base de dados, em uma ação simples, sem burocracias e com a garantia de atendimento imediato à solicitação.
            <br />
            </p>
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Ocultar do cliente informações sobre mudanças nos processos – É direito do cliente ser informado sobre qualquer mudança nos processos de coleta, tratamento ou armazenamento dos dados. Inclusive, neste caso, é importante reforçar a ele a possibilidade de solicitar o descadastro da base de dados, caso não concorde com algo da nova política. Dessa forma, dedique atenção para estruturar as práticas de adequação à LGPD e, para evitar ferir as normas da lei, só faça alterações nos processos caso elas sejam fundamentais para o negócio.
            </p>
            <div className="divider-contrast"></div>
          </div>
        </div>
        <div className="info-card-body -fr1 ">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast _mb-sm"> Atenção especial aos dados de jovens:</span>
              <br />
              <br />
            No contato com jovens com idade inferior a 12 anos, a LGPD exige um cuidado extra com relação à manipulação dos dados. As informações de membros desse público só podem ser coletadas mediante a autorização dos respectivos responsáveis legais. É importante lembrar, também, que a forma de comunicação com o cliente deve considerar o perfil do público. Isso quer dizer que, ao falar com uma criança ou jovem, não é permitido usar termos jurídicos ou qualquer outra linguagem de difícil interpretação e compreensão.
            </p>
          </div>
        </div>
        <div className="info-card-body -fr1 ">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              Setor de saúde, um dos mais sensíveis;
              Em geral, a área mais sensível da vida das pessoas é a saúde. Isso faz com que, nas instalações de clínicas, hospitais e laboratórios, qualquer exposição de informações sobre os pacientes sejam cuidadosamente planejadas. Esse cuidado deve ser redobrado com a chegada da LGPD. A orientação diz respeito, por exemplo, a placas de identificação na porta do quarto ou na cabeceira e pés do leito. Há também a necessidade de maior fiscalização quanto a dados do prontuário físicos ou virtuais para que não haja ações que caracterizem vazamento de dados.
          </p>
          </div>
        </div>
        <div className="info-card-body -fr1 ">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
              <span className="typo-sub-heading typo-color-contrast _mb-sm"> Algumas medidas preventivas são importantes:</span>
            </p>
            <br />
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Só exponha ou utilize informações do paciente nas instalações da organização caso tenha autorização formal dele;
            </p>
            <br />
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Treine a equipe com relação à deveres, direitos e punições relacionadas à LGPD;
            </p>
            <br />
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Mapeie, categorize e monitore as informações de pessoas que circulam na instituição;
            </p>
            <br />
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Invista em soluções de segurança dos dados coletados;
            </p>
            <br />
            <div className="divider-contrast"></div>
            <p className="text typo-body-2 typo-color-dark-primary">
              - Mantenha o constante monitoramento das ações e revisão dos processos. As empresas que não respeitarem as diretrizes da LGPD estarão sujeitas a multas simples ou diárias de até 2% do faturamento da empresa, limitado a R$ 50 milhões por infração. Além disso, também poderão ter os dados irregulares bloqueados para o uso ou a infração amplamente divulgada.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
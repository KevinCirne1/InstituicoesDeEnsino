import { Row } from 'react-bootstrap';
import PropriedadeCard from './PropriedadeCard';
import PropTypes from 'prop-types';

const PropriedadesCard = ({ data = [] }) => {
  console.log("📢 Dados recebidos em PropriedadesCard:", data); // Apenas para depuração

  return (
    <Row className="g-4">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, indice) => (
          <PropriedadeCard
            key={indice}
            nome={item.NO_ENTIDADE || "Nome não disponível"}
            regiao={item.NO_REGIAO || "Não informado"}
            uf={item.NO_UF || "Não informado"}
            municipio={item.NO_MUNICIPIO || "Não informado"}
            mesorregiao={item.NO_MESORREGIAO || "Não informado"}
            microrregiao={item.NO_MICRORREGIAO || "Não informado"}
            matriculas={item.QT_MAT_BAS || "Não informado"}
          />
        ))
      ) : (
        <p className="text-center text-muted">Nenhuma instituição encontrada.</p>
      )}
    </Row>
  );
};

// Validação das props
PropriedadesCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      NO_ENTIDADE: PropTypes.string,
      NO_REGIAO: PropTypes.string,
      NO_UF: PropTypes.string,
      NO_MUNICIPIO: PropTypes.string,
      NO_MESORREGIAO: PropTypes.string,
      NO_MICRORREGIAO: PropTypes.string,
      QT_MAT_BAS: PropTypes.string,
    })
  ),
};

export default PropriedadesCard;

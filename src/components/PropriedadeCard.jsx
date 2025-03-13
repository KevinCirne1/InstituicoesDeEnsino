import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PropriedadeCard = ({ nome, regiao, uf, municipio, mesorregiao, microrregiao, matriculas }) => {
  return (
    <Col md={4}> {/* Ajusta para exibição em 3 colunas */}
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{nome}</Card.Title>
          <Card.Text>
            <strong>Região:</strong> {regiao} <br />
            <strong>UF:</strong> {uf} <br />
            <strong>Município:</strong> {municipio} <br />
            <strong>Mesorregião:</strong> {mesorregiao} <br />
            <strong>Microrregião:</strong> {microrregiao} <br />
            <strong>Matrículas:</strong> {matriculas}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Validação das props
PropriedadeCard.propTypes = {
  nome: PropTypes.string,
  regiao: PropTypes.string,
  uf: PropTypes.string,
  municipio: PropTypes.string,
  mesorregiao: PropTypes.string,
  microrregiao: PropTypes.string,
  matriculas: PropTypes.string,
};

export default PropriedadeCard;

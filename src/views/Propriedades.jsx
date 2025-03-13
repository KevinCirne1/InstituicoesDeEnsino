import { useState, useEffect } from 'react';
import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import { Button, Col, Row, Container } from 'react-bootstrap';
import PropriedadesCard from '../components/PropriedadesCard';
import CadastroIE from '../components/Cadastros';

const Propriedades = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nomeBusca, setNomeBusca] = useState('');
  const [showModal, setShowModal] = useState(false);

  // ✅ Corrigindo a URL para 'ist'
  const fetchData = async (url = 'http://localhost:3000/ist') => {
    try {
      setLoading(true);
      console.log(`🔍 Buscando dados da API: ${url}`);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erro ao buscar dados');
      const jsonData = await response.json();
      console.log('📄 Dados recebidos:', jsonData);
      setData(jsonData); // ✅ Agora recebe os dados da API
    } catch (err) {
      console.error('❌ Erro na requisição:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="text-center mt-4">Lista de Instituições de Ensino</h1>

      {/* 🔹 Barra de busca */}
      <Row className="mb-3">
        <Col xs={8}>
          <MDBInput
            label="Buscar Instituição"
            type="text"
            size="sm"
            value={nomeBusca}
            onChange={(e) => setNomeBusca(e.target.value)}
          />
        </Col>
        <Col xs={2}>
          <MDBTooltip title="Buscar IE">
            <Button onClick={() => fetchData(`http://localhost:3000/ist?NO_ENTIDADE=${encodeURIComponent(nomeBusca)}`)} variant="primary">
              Buscar
            </Button>
          </MDBTooltip>
        </Col>
        <Col xs={2}>
          <MDBTooltip title="Cadastrar Nova IE">
            <Button onClick={() => setShowModal(true)} variant="primary">Nova Ist</Button>
          </MDBTooltip>
        </Col>
      </Row>

      {loading && <p>Carregando...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && <PropriedadesCard data={data} />}

      <CadastroIE show={showModal} handleClose={() => setShowModal(false)} refreshData={fetchData} />
    </Container>
  );
};

export default Propriedades;

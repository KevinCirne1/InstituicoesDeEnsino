import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CadastroIE = ({ show, handleClose, refreshData }) => {
    // 🔹 Estado para os campos do formulário
    const [formData, setFormData] = useState({
        NO_ENTIDADE: '',
        NO_REGIAO: '',
        NO_UF: '',
        NO_MUNICIPIO: '',
        NO_MESORREGIAO: '',
        NO_MICRORREGIAO: '',
        QT_MAT_BAS: ''
    });

    // 🔹 Estado para exibir mensagens de erro
    const [errors, setErrors] = useState({});

    // 🔹 Função para atualizar os campos do formulário
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Remove a mensagem de erro assim que o usuário começa a digitar
        setErrors({ ...errors, [e.target.name]: '' });
    };

    // 🔹 Função para validar os campos
    const validarCampos = () => {
        let novosErros = {};

        // Verifica se todos os campos estão preenchidos
        Object.keys(formData).forEach((campo) => {
            if (!formData[campo].trim()) {
                novosErros[campo] = "Este campo é obrigatório";
            }
        });

        setErrors(novosErros);
        return Object.keys(novosErros).length === 0; // Retorna true se não houver erros
    };

    // 🔹 Função para enviar o cadastro para a Fake API
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Se a validação falhar, não envia o formulário
        if (!validarCampos()) {
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/ies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Erro ao cadastrar instituição.');

            handleClose(); // Fecha o modal
            refreshData(); // Atualiza os dados

            // Resetando o formulário
            setFormData({
                NO_ENTIDADE: '',
                NO_REGIAO: '',
                NO_UF: '',
                NO_MUNICIPIO: '',
                NO_MESORREGIAO: '',
                NO_MICRORREGIAO: '',
                QT_MAT_BAS: ''
            });

            setErrors({}); // Limpa os erros após o envio bem-sucedido
        } catch (error) {
            console.error('Erro no cadastro:', error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastrar Nova Instituição</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome da Instituição</Form.Label>
                        <Form.Control type="text" name="NO_ENTIDADE" value={formData.NO_ENTIDADE} onChange={handleChange} />
                        {errors.NO_ENTIDADE && <p className="text-danger">{errors.NO_ENTIDADE}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Região</Form.Label>
                        <Form.Control type="text" name="NO_REGIAO" value={formData.NO_REGIAO} onChange={handleChange} />
                        {errors.NO_REGIAO && <p className="text-danger">{errors.NO_REGIAO}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>UF</Form.Label>
                        <Form.Control type="text" name="NO_UF" value={formData.NO_UF} onChange={handleChange} />
                        {errors.NO_UF && <p className="text-danger">{errors.NO_UF}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Município</Form.Label>
                        <Form.Control type="text" name="NO_MUNICIPIO" value={formData.NO_MUNICIPIO} onChange={handleChange} />
                        {errors.NO_MUNICIPIO && <p className="text-danger">{errors.NO_MUNICIPIO}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mesorregião</Form.Label>
                        <Form.Control type="text" name="NO_MESORREGIAO" value={formData.NO_MESORREGIAO} onChange={handleChange} />
                        {errors.NO_MESORREGIAO && <p className="text-danger">{errors.NO_MESORREGIAO}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Microrregião</Form.Label>
                        <Form.Control type="text" name="NO_MICRORREGIAO" value={formData.NO_MICRORREGIAO} onChange={handleChange} />
                        {errors.NO_MICRORREGIAO && <p className="text-danger">{errors.NO_MICRORREGIAO}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Matrículas</Form.Label>
                        <Form.Control type="number" name="QT_MAT_BAS" value={formData.QT_MAT_BAS} onChange={handleChange} />
                        {errors.QT_MAT_BAS && <p className="text-danger">{errors.QT_MAT_BAS}</p>}
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

// Validação das props
CadastroIE.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    refreshData: PropTypes.func.isRequired
};

export default CadastroIE;
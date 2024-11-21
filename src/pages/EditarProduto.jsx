// importando compontentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// importação de compontentes
import NavBarra from "../components/NavBarra";

const EditarProduto = () => {
  const CadastroProduto = () => {
    // lista de categorias
    const cats = [
      { id: 1, nome: "Eletrônicos" },
      { id: 2, nome: "Moda e Vestuario" },
      { id: 3, nome: "Alimentos e Bebidas" },
      { id: 4, nome: "Esportes e lazer" },
      { id: 5, nome: "Brinquedos e jogos" },
      { id: 6, nome: "Livros" },
      { id: 7, nome: "Saúde e Beleza" },
    ];

    //   link produto sem imagem
    const linkImagem =
      "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

    return <div>
        <NavBarra />
      <Container>
        <h1>Editar Produto</h1>
        <form className="mt-3">
          <Row>
            <Col xs={6}>
              {/* Caixinha de Nome */}
              <FloatingLabel
                controlId="floatingInputNome"
                label="Nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do Produto"
                />
              </FloatingLabel>

              {/* Caixinha de Descrição */}
              <FloatingLabel
                controlId="floatingInputDescrição"
                label="Descrição"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite a descrição do Produto"
                />
              </FloatingLabel>
              {/* select de categoria */}
              <Form.Group controlId="formGridTipo" className="mb-3">
                <Form.Label>Tipo de produto</Form.Label>
                <Form.Select>
                  {cats.map((cat) => (
                    <option key={cat.id} value={cat.nome}>
                      {cat.nome}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Caixinha de Preço */}
              <FloatingLabel
                controlId="floatingInputPreco"
                label="Preço"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.1"
                  placeholder="Digite a preço do Produto"
                />
              </FloatingLabel>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formFileLg" className="mb-3">
                {/* Caixinha da Imagem */}
                <FloatingLabel
                  controlId="floatingInputImage"
                  label="Envie o link da imagem do produto"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Envie o link da imagem do produto"
                  />
                </FloatingLabel>
                <Image src={linkImagem} rounded width={300} height={300} />
              </Form.Group>
            </Col>
          </Row>
          
          {/* Alerta caso haja erro */}
          <Alert key="danger" variant="danger" >
            Há um erro.
          </Alert>

          {/* Botão para enviar o formulario de cadastro de produto */}

          <Button variant="warning" size="lg" type="submit">
            Editar
          </Button>
        </form>
      </Container>
    </div>;
  };
};
export default EditarProduto;

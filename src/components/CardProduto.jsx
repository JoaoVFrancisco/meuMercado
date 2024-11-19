import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (props) => {
  return (
    <div>
      <Card style={{ width: "16rem", height: "30rem" }}>
        {/* imagem do card */}
        <Card.Img variant="top" src={props.imagemUrl} height="200px" />
        <Card.Body>
          {/* Titulo do card com nome do produto */}
          <Card.Title>{props.nome}</Card.Title>
          {/* subtitulo no card com preço do produto */}
          <Card.Subtitle className="mb-2 text-muted">
            Preço: {props.preco}
          </Card.Subtitle>
          <Card.Text>
            <b> Descrição: </b> <br></br> {props.descricao}
          </Card.Text>

          <Card.Text>
            <b> Categoria: </b> <br></br> {props.categoria}
          </Card.Text>

          <Card.Link href="/">
          <Button variant="info">Editar</Button>
          </Card.Link>

          <Card.Link href="/">
          <Button variant="danger" >Excluir</Button>
          </Card.Link>

        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;

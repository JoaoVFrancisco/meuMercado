import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (props) => {
  // Função para deletar um produto
  const handleDelete = async (e) => {

    const req = await fetch(`http://localhost:5000/produtos/${props.id}`,
      {
        method:"DELETE"
      });
      const res =  await req.json()
      console.log(res)
      alert(`Produto ${res.nome} removido`)
  };

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

          <Card.Link href={`/produto/editar/${props.id}`}>
            <Button variant="info">Editar</Button>
          </Card.Link>

          <Card.Link href="/home">
            <Button variant="danger" type="Button" onClick={handleDelete}>
              Excluir
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;

import React from "react";
import CardProduto from "../components/CardProduto";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "Shampoo Cr7",
      descricao: "Melhor Shampoo do mundo",
      preco: 7.77,
      categoria: "Saúde e beleza",
      imagemUrl:
        "https:images-americanas.b2w.io/produtos/2473557992/imagens/shampoo-anticaspa-clear-men-sports-limpeza-profunda-200ml/2473557992_2_large.jpg",
    },
    {
      id: 2,
      nome: "Pizza",
      descricao: "Pizza (comida italiana",
      preco: 19.99,
      categoria: "Comida",
      imagemUrl:
        "https:catupiry.com.br/wp-content/uploads/2021/06/pizza_pepperoni.jpg",
    },
    {
      id: 3,
      nome: "Carro Uno",
      descricao: "Meio de locomoção",
      preco: 100000.0,
      categoria: "Automovél",
      imagemUrl:
        "https:fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/11/04233232/19843457-1160x774.jpg",
    },
    {
      id: 3,
      nome: "Carro Uno",
      descricao: "Meio de locomoção",
      preco: 100000.0,
      categoria: "Automovél",
      imagemUrl:
        "https:fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/11/04233232/19843457-1160x774.jpg",
    },
    {
      id: 3,
      nome: "Carro Uno",
      descricao: "Meio de locomoção",
      preco: 100000.0,
      categoria: "Automovél",
      imagemUrl:
        "https:fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/11/04233232/19843457-1160x774.jpg",
    },
    {
      id: 3,
      nome: "Carro Uno",
      descricao: "Meio de locomoção",
      preco: 100000.0,
      categoria: "Automovél",
      imagemUrl:
        "https:fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/11/04233232/19843457-1160x774.jpg",
    },
    {
      id: 3,
      nome: "Carro Uno",
      descricao: "Meio de locomoção",
      preco: 100000.0,
      categoria: "Automovél",
      imagemUrl:
        "https:fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/11/04233232/19843457-1160x774.jpg",
    },
    {
      id: 3,
      nome: "Carro Uno",
      descricao: "Meio de locomoção",
      preco: 100000.0,
      categoria: "Automovél",
      imagemUrl:
        "https:fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/11/04233232/19843457-1160x774.jpg",
    },
  ];

  return (
    <div>
      <h1> Lista de Produtos </h1>
      <Container>
      <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-center flex-wrap">
        {/* Card com inforções fixas */}
        {/* <CardProduto
           id="1"
           nome="Shampoo Cr7"
           descricao="Melhor Shampoo do mundo"
           preco="7,77"
           categoria="Saúde e beleza"
           imagemUrl="https:images-americanas.b2w.io/produtos/2473557992/imagens/shampoo-anticaspa-clear-men-sports-limpeza-profunda-200ml/2473557992_2_large.jpg"
         /> */}

        {/* card com informações variaveis */}
        {produtos.map((prod) => (
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
          />
        ))}
      </div>
      </Container>
    </div>
  );
};

export default Home;

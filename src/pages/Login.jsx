// importando compontentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <div>
      <Container
        style={{ backgroundColor: "lightblue", height: "100vh" }}
        className="justify-content-center align-content-center"
      >
        {/* icone de Login */}
        <span
          style={{ fontSize: "200px", color: "purple" }}
          className="material-symbols-outlined"
        >
          login
        </span>
        {/* Caixinha de email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        {/* Caixinha da senha */}
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        {/* Botão para enviar o formulário */}
        <Button variant="primary" className="mt-4">Login</Button>
      </Container>
    </div>
  );
};

export default Login;

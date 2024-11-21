// importando compontentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// importar o hook useState para monitorar a mudança das variaveis
import { useState } from "react";
import { Alert } from "bootstrap";

const Login = () => {
  //Variaveis pra guardar as informações digitadas pelo usúario
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Variaveis para alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none")
  const [alertMensagem, setAlertMensagem] = useState("")
  const [alertVariant, setAlertVariant] = useState("danger")

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
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FloatingLabel>
        {/* Caixinha da senha */}
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </FloatingLabel>
        {/* Mensagem de alerta */}
        <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

        {/* Botão para enviar o formulário */}
        <Button variant="primary" className="mt-4" size="lg" href="/home">
          Login
        </Button>
      </Container>
    </div>
  );
};

export default Login;

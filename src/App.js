// 필요한 모듈과 컴포넌트를 import 합니다.
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

// App 컴포넌트를 정의합니다.
function App() {
  return (
    // Bootstrap의 Container 컴포넌트를 사용하여 내용을 감쌈
    <Container>
      {/* 페이지 제목을 추가합니다. */}
      <h1 className="text-center m-3">Phone Book</h1>
      {/* Bootstrap의 Row 컴포넌트를 사용하여 가로 행을 만듭니다. */}
      <Row>
        {/* 첫 번째 열: 연락처 입력 폼 */}
        <Col className="border-column">
          <ContactForm />
        </Col>
        {/* 두 번째 열: 연락처 목록 */}
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

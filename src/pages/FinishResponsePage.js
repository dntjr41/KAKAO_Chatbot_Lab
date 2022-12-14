import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import '../css/FinishResponsePage.css'

// 피설문자의 응답 완료 페이지
// └헤더 (조금 다름)
// └응답완료 컴포넌트
//   └감사인사, 수정링크, 메인페이지 링크 버튼

const FinishResponsePage = function () {
    return (
        <div className="finish-response-layout">
            <Header color="green" />
            <div className="finish-response-thankBox">
                <Row style={{ marginBottom: "120px", fontSize: "24px", fontWeight: "600" }}>
                    <Col>설문에 응답해주셔서 감사합니다.</Col>
                </Row>
                <Row style={{ marginBottom: "65px" }}>
                    <Link to="#">응답 수정하기</Link>
                </Row>
                <Row>
                    <Link to="/home"><button className="finish-response-exit" type="button">SurMoonVey알아보기</button></Link>
                </Row>
            </div>
        </div>
    )
}

export default FinishResponsePage;
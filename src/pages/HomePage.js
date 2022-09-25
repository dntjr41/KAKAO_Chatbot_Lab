import '../css/HomePage.css'
import { Link } from "react-router-dom";

// 홈 페이지
// └헤더
// └슬라이딩 배너
//   └1 슬라이드 - 홍보
//   └2 슬라이드 - 튜토리얼 
// └푸터
//   └이용약관, 고객센터, 개인정보방침, FAQ 링크
//   └제작자 정보

const HomePage = function () {
    return (
        <div className="homePage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn">login</a>
            <a href="/myInfo" className="myBtn">my</a>
           

            <button type="button" className="slideLeftBtn">Left</button>
            <button type="button" className="slideRightBtn">Right</button>

            <Link to="/tos" className="tosLink" >이용약관</Link>
            <Link to="/service-center" className="serviceLink" >고객센터</Link>
            <Link to="/privacy-policy" className="privacyLink" >개인정보처리방침</Link>
            <Link to="/faq" className="faqLink" >FAQ</Link>
             
        </div>
    )
}

export default HomePage;
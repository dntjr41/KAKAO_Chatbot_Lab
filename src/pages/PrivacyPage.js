import '../css/ToggleStyles.css';
import '../css/PrivacyPage.css';
import Header from "../components/Header";
import { Col } from 'react-bootstrap';
import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

// 개인정보처리방침 페이지
// └헤더

function Item({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li className="AnimateLi" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.h2>{item.title}</motion.h2>

            <motion.div layout />
            <AnimatePresence>{isOpen && (<motion.h5>{item.subtitle}</motion.h5>)}</AnimatePresence>
        </motion.li>
    );
}

const items = [
    {
        id: "1",
        title: "개인정보 처리방침 EASY(易知) 버전",
        subtitle: "쉽고 편하게 이해할 수 있는 개인정보 처리방침, 설문베이가 먼저 시작합니다."
    },
    {
        id: "2",
        title: "이지(Easy, 易知)버전",
        subtitle: "설문베이는 이용자의 개인정보 보호를 최우선의 가치로 삼으며 개인정보 보호와 관련한 국내외 모든 법령을 성실히 준수합니다. 또한 회사의 개인정보 보호 정책을 이용자에게 보다 알기 쉽고 상세하게 설명하기 위해 노력하고 있습니다.설문베이의 '개인정보 처리방침'은 설문베이 서비스를 이용하는 모든 이용자에게 적용됩니다."
    },
    {
        id: "3",
        title: "수집하는 개인정보",
        subtitle: "설문베이가 제공하는 대부분의 서비스들은 회원가입을 하지 않고서도 이용이 가능합니다.회원가입을 하시는 경우, 로그인하여 개인화 서비스를 비롯한 다양한 회원제 기반의 서비스들을 이용하실 수 있습니다.설문베이는 회원가입 과정에서 서비스 이용을 위해 필요한 최소한의 정보만을 수집 및 활용합니다. 이러한 이유로 개인화 서비스 등의 일부 서비스에서는 이용자의 동의를 받아 개인정보를 추가로 수집하는 경우도 있습니다."
    },
    {
        id: "4",
        title: "개인정보 수집 방법",
        subtitle: "설문베이는 홈페이지 등에서 이용자로부터 직접 입력 받는 방식으로 개인정보를 수집합니다. 개인정보의 수집이 발생하는 경우(생성정보 등 일부 예외를 제외하고) 설문베이는 이용자로부터 ‘개인정보 수집 및 이용에 대한 동의’를 얻으며 그 동의 범위 내에서만 개인정보를 이용합니다."
    },
    {
        id: "5",
        title: "수집한 개인정보의 이용",
        subtitle: "설문베이는 원칙적으로 이용자의 사전 동의 없이 개인정보를 외부에 제공하지 않습니다.관계 법령에 의해 예외적으로 제3자에게 제공 의무가 발생하는 경우 해당 법령을 엄격히 해석하여 준수하며 이용자의 프라이버시 침해가 최소화되도록 노력합니다. 이에 관한 이용자의 문의에 성실히 답변할 것입니다."
    },
    {
        id: "6",
        title: "개인정보의 파기",
        subtitle: "개인정보의 수집 및 이용 목적이 달성 되면, 수집한 개인정보를 신속하고 안전한 방법으로 파기합니다.'개인정보 유효기간제'에 따라 원칙적으로 1년간 서비스를 이용하지 않은 회원의 개인정보는 별도 분리하여 보관 · 관리합니다."
    },
    {
        id: "7",
        title: "이용자 및 법정 대리인의 권리와 행사 방법",
        subtitle: "설문베이는 정보통신망법 및 개인정보 보호법 등 관계 법령에서 규정하고 있는 이용자의 권리를 충실히 보장합니다.이용자는 언제든지 자신의 개인정보 및 이용 현황을 상시 확인할 수 있으며, 동의 철회 및 정정 요청을 할 수 있습니다. 만 14세 미만 아동에 대한 법정 대리인의 권리 또한 법령에 따라 보장됩니다."
    },
    {
        id: "8",
        title: "개인정보 보호를 위한 설문베이의 노력",
        subtitle: "설문베이는 정보통신망법 및 개인정보 보호법에서 요구하는 수준 이상으로 개인정보를 안전하게 관리하고 있습니다. 이용자에게 친화적인 서비스로서의 프라이버시(Privacy as a Service)를 지향하고, 회사의 개인정보 보호 정책 확인, 개인정보 보호 방법 안내, 개인정보 보호 요청까지 One-Stop으로 처리할 수 있는 '프라이버시센터'를 운영하고 있습니다.이용자와의 적극적인 소통을 위해 '설문베이 개인정보 보호 공식 블로그'와 공식 SNS도 함께 운영하고 있습니다."
    }
];

const PrivacyPage = function () {
    return (
        <div className="privacyPage">
            <Header color="purple" />

            <div className="TosMainFrame">
                <Col><h3>개인정보 처리방침</h3></Col>

                <AnimateSharedLayout className="AnimateLayout">
                    <motion.ul className="AnimateUl" layout initial={{ borderRadius: 25 }}>
                        {items.map(item => (
                            <Item key={item} item={item} />
                        ))}
                    </motion.ul>
                </AnimateSharedLayout>
            </div>
        </div>
    )
}

export default PrivacyPage;
export { items };
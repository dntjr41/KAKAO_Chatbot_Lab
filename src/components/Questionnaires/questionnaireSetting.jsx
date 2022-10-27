import ListGroup from 'react-bootstrap/ListGroup';

import { SET_SL, SET_SSL } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import axiosInstance from '../../api';

function QuestionnaireSetting(props) {
    const { selectedQuestionnaireID } = useSelector((state) => ({
        selectedQuestionnaireID: state.questionnairesReducer.selectedQuestionnaireID
    }));
    /* redux */
    // 새로고침을 위한 부분
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { surveyList } = useSelector((state) => ({
        surveyList: state.questionnairesReducer.surveyList
    }));
    // API get surveyList by user ID
    const getSurveyUrlInstance = "/survey/userId=" + 1;
    const getSurveyListById = async () => {
        try {
            const res = await axiosInstance.get(getSurveyUrlInstance)
                .then(function (response) {
                    dispatch(SET_SL(response.data))
                    dispatch(SET_SSL(surveyList))
                })
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        { getSurveyListById() }
    }, []);

    /* onclick 함수들 */
    // to responseSurveyPage
    function preview () {
        console.log("preview");
    }
    //* API copy survey by survey ID *//
    const surveyCopyUrlInstance = "/survey/copy/surveyId=" + selectedQuestionnaireID["surveyId"];
    const surveyCopy = async () => {
        try {
            const res = await axiosInstance.put(surveyCopyUrlInstance)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    getSurveyListById();
                })
        } catch (err) {
            console.log(err);
        }
    }
    // to CreateSurveyPage
    function surveyAlter() {
        navigate("/create-survey/" + selectedQuestionnaireID["surveyId"]);
    }
    // API delete survey by survey ID
    const surveyDeleteUrlInstance = "/survey/surveyId=" + selectedQuestionnaireID["surveyId"];
    const surveyDelete = async () => {
        try {
            const res = await axiosInstance.delete(surveyDeleteUrlInstance)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    getSurveyListById();
                })
        } catch (err) {
            console.log(err);
        }
    }
    function surveyResultAnalysis() {
        navigate("/survey-result/statistic" + selectedQuestionnaireID["surveyId"]);
    }
        
    return (
        <ListGroup>
        <ListGroup.Item action onClick={preview} >
            설문 보기
        </ListGroup.Item >
        <ListGroup.Item action onClick={surveyCopy} >
            설문 복사 
        </ListGroup.Item>
        <ListGroup.Item action onClick={surveyAlter} >
            설문 수정
        </ListGroup.Item>
        <ListGroup.Item action onClick={surveyDelete} >
            설문 삭제
        </ListGroup.Item>
        <ListGroup.Item action onClick={surveyResultAnalysis}>
            결과 분석
        </ListGroup.Item>
        </ListGroup>
    )
}

export default QuestionnaireSetting
import { createSlice } from '@reduxjs/toolkit'

const questionnaireState = {
    // 설문 상태에 따라 select from db: 0: 전체, 1: 제작 중, 2: 예약 중, 3: 배포 중, 4: 종료 
    questionnaireSelectionOption: 0,
    // 설문 ID
    selectedQuestionnaireID: null,
    // 새 설문 눌렀을 때 popup on/off
    newQuestionnairePopupShow: false,

    // 새 설문 눌렀을 때 템플릿 popup on/off
    questionnaireTemplatePopupShow: false,
    // 0: 설문 템플릿, 1: 이전 템플릿
    templateSelectOption: 0,
    // 설문 제작함 카드 6개 씩 display하는데 몇 페이지 인지 => default 1
    questionnairePageOption : 1,
    // 유저 아이디에 따라 셀렉트 해온 설문 정보
    surveyList: [{},],
    // 설문 상태에 따라 정렬한 설문
    selectedSurveyList: [{},]
}

const questionnaireSlice = createSlice({ 
    name: 'questionnaireState',
    initialState: questionnaireState,
    reducers: {
        // 설문 제작함 display option & 페이지
        SET_QSO: (state, action) =>{
            state.questionnaireSelectionOption = action.payload;
        },
        SET_SQID:(state, action) => {
            state.selectedQuestionnaireID = action.payload; // 설문 ID
        },
        SET_QPO: (state, action) => {
            state.questionnairePageOption = action.payload; // 몇 페이지 인지
        },
        

        // 새 설문 버튼 popup on/off
        SET_NQPS_ON: (state) => {
            state.newQuestionnairePopupShow = true;
        },
        SET_NQPS_OFF: (state) => {
            state.newQuestionnairePopupShow = false;
        },

        // 새 템플릿 popup on/off
        SET_QTPS_ON: (state) => {
            state.questionnaireTemplatePopupShow = true;
        },
        SET_QTPS_OFF: (state) => {
            state.questionnaireTemplatePopupShow = false;
        },
        // 0: 설문 템플릿, 1: 이전 템플릿
        SET_TSO: (state, action) => {
            state.templateSelectOption = action.payload;
        },
        // 유저 아이디에 따라 셀렉트 해온 설문 리스트
        SET_SL: (state, action) => {
            state.surveyList = action.payload;
        },
        // 설문 상태에 따라 셀렉트 된 설문 리스트, 시작일 종료일 계산
        SET_SSL: (state) => {
            state.selectedSurveyList = []
            var currentdatetime = Date.now();
            var i = 0;
            if (state.questionnaireSelectionOption === 0){ // 전체
                for (i = 0; i < state.surveyList.length; i++){
                    state.selectedSurveyList = [...state.selectedSurveyList, state.surveyList[i]];
                    console.log(state.surveyList[i]["surveyStart"]);
                }
            }
            if (state.questionnaireSelectionOption === 1){ // 제작 중
                for (i = 0; i < state.surveyList.length; i++){
                    state.selectedSurveyList = [...state.selectedSurveyList, state.surveyList[i]];
                }
            }
            if (state.questionnaireSelectionOption === 2){ // 예약 중
                for (i = 0; i < state.surveyList.length; i++){
                    state.selectedSurveyList = [...state.selectedSurveyList, state.surveyList[i]];
                }
            }
            if (state.questionnaireSelectionOption === 3){ // 배포 중
                for (i = 0; i < state.surveyList.length; i++){
                    state.selectedSurveyList = [...state.selectedSurveyList, state.surveyList[i]];
                }
            }
            if (state.questionnaireSelectionOption === 4){ // 종료
                for (i = 0; i < state.surveyList.length; i++){
                    state.selectedSurveyList = [...state.selectedSurveyList, state.surveyList[i]];
                }
            }
        },
    },
});

export const { SET_QSO, SET_SQID, SET_QPO, SET_NQPS_ON, SET_NQPS_OFF, SET_QTPS_ON, SET_QTPS_OFF, SET_TSO, SET_SL, SET_SSL } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
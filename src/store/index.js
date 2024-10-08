import { createStore } from "redux";
import { countReducer } from "../reducers/countReducer";

// 리덕스 스토어 : 모든 상태를 관리하는 중앙 저장소

const store = createStore(countReducer);

export default store;

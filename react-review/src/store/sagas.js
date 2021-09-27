// 一般存放异步操作

import { put, takeEvery } from 'redux-saga/effects'
import {SagaGetTodoList} from "./actionTypes"
import {initListAciton} from './actionCreators'
import axios from 'axios';

function* fetchTodoList(){
	const res = yield axios.get("/todolist.json",{dateType:'json'});
	const action = initListAciton(res.data.list);
	yield put(action)
}


function* sagas() {
  yield takeEvery(SagaGetTodoList, fetchTodoList);
}
  
export default sagas;
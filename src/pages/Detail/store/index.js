//统一导出，这样不管是外摆合并store 还是其他文件使用可以都只用import一行
//简化代码
import reducer from './reducer';
import * as constants from './constants';
import * as  actionCreates from "./actionCreates";

export { reducer, constants, actionCreates };
// import { of, Observable, from } from "rxjs";
// import { switchMap, map, catchError, } from 'rxjs/operators';
import { ofType, } from "redux-observable";
import { TodoAction } from "../action/todo-action";
// import Axios from "axios"; if we want to hit api

export default class Epic {

    static GetData = action$ => {
        return action$.pipe(
            ofType(TodoAction.ADD_TODO),
        );



    };

}
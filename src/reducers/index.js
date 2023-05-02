import { ADD_MOVIES } from "../actions";
export default function movies (state = [],action){
    // instead of 'ADD_MOVIES' string we will use variable and those variable will be called action type if(action.type==='ADD_MOVIES'){
        if(action.type===ADD_MOVIES){
        return action.movies;
    }
    return state;
}
/*Actions is basically a javascript object.using this object we can express intent to modify the state.
type property is used to tell redux what action should be taken*/


/*{
    type:'ADD_MOVIES'
    /*YOU CAN SEND OTHER DATA WITH IT TOO
    movies:[m1,m2,m3,m4]
    user:[]
    
}
{
    type:'DECREASE_COUNT'
}*/
//action type
export const ADD_MOVIES='ADD_MOVIES';
//action function
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:movies
    }
}

function reducer(state, action){
    switch(action.type){
        case 'create':{
            return [action.NewItem, ...state];
        }
        case 'update':{
            return state.map((it)=>
            it.id === action.targetId);
        }
        case 'delete':{
            return state.filter((it)=>
            it.id !== action.targetId);
        }
        default:{
            return state;
        }
    }


};

function changeDateFormat(Frenchdate){
    if(!(Frenchdate instanceof Date)){
        Frenchdate = new Date(Frenchdate);
    }
    let year = Frenchdate.getFullYear();
    let month = String(Frenchdate.getMonth()+1).padStart(2,'0');
    let date = String(Frenchdate.getDate()).padStart(2,'0');
    return `${year}-${month}-${date}`;
}    

export {reducer, changeDateFormat};
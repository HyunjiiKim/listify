function reducer(state, action){
    switch(action.type){
        case 'create':
            return [action.data, ...state];
        default:{
            return state;
        }
    }


};

export {reducer};
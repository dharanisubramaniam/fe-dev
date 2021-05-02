export const initialState = {
    category:[],
    course:[],
    allCourse:false,
    updatedCourse:null,
    updatedTitle:null,
    user:true,
}


export const reducer =(state,action)=>{ 
    switch(action.type){
        case"SET_CATEGORY":
            return{
                ...state,
                category:action.category,
                };
        case"SET_COURSE":
            return{
                    ...state,
                    course:action.course,
                };
        case"SET_ALLCOURSE":
            return{
                    ...state,
                    allCourse:action.allCourse,
                };
        case"UPDATE_COURSE":
            return{
                    ...state,
                    updatedCourse:action.updatedCourse,
                };
        case"UPDATE_TITLE":
            return{
                    ...state,
                    updatedTitle:action.updatedTitle,
                };
        default:
            return state;
                    
    }
}
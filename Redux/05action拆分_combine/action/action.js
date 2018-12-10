export const ADD_ONE ='ADD_ONE';
export const MINUS_ONE ='MINUS_ONE';

export function add_one(){
    return {
        type:ADD_ONE 
    }
};
export function minus_one(){
    return {
        type:MINUS_ONE 
    }
};
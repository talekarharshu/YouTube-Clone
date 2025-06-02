<<<<<<< HEAD
export const API_KEY = 'AIzaSyAPtJCCSaOAarsPFJWWHP9zAjtiQ1AJAj4';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000) + 'M'
    }
    else if(value>=1000){
        return Math.floor(value/1000) + 'K'
    }
    else{
        return value
    }
}
=======
export const API_KEY = 'AIzaSyAPtJCCSaOAarsPFJWWHP9zAjtiQ1AJAj4';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000) + 'M'
    }
    else if(value>=1000){
        return Math.floor(value/1000) + 'K'
    }
    else{
        return value
    }
}
>>>>>>> 66fc2260feb470c2f9e33b1133c8081375e24c94

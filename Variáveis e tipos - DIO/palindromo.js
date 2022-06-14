// solução 1
function verifica_palindromo(string) {
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

let my_var = null;

// solução 2

function verifica_palindromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verifica_palindromo2("true"));
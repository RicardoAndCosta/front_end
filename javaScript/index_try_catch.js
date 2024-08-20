function convertToUpper() {

    try {
        return `${obj.name.toUpperCase()}!!`        
    } catch (error) {
        if(error instanceof TypeError){
            console.log(`Ocorreu um erro do tipo ${error.name} com a msg: ${error.message}`);
        }
    } finally {
        console.log('completou o teste');
    }   

}

var obj = {name: 'ricardo'}
console.log(convertToUpper(obj));

var obj = {nome: 'ricardo'}
console.log(convertToUpper(obj));


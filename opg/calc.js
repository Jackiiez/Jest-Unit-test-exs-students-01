function add(a,b){
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const isNanA = Number.isNaN(a);
    const isNanB = Number.isNaN(b);
    if(!isNanA && !isNanB){
        return numA+numB
    }
    else{
        throw new Error('NAN')
    }

}
module.exports = {add};
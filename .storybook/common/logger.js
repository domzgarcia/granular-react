global.dd = (input) => {
    console.clear();
    let print = null;
    if( ! input.length && typeof input === 'object') {
        print = `${JSON.stringify(input, null, 4)}`
        return console.log(print);
    }
    if( input.length && typeof input[0] === 'object') {
        return console.table(input);
    }
    print = input;
    return console.log(print);
}
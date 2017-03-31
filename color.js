let hex = () => { return Math.floor(Math.random()*256); };

let hexStr = () => { return hex().toString(16); };

let hexNorm = () => { 
    var str = hexStr(); 
    return str === 1 ? '0' + str : str;
}; 

let colorGen = () => {
    return new String("#" + hexNorm() + hexNorm() + hexNorm()).toUpperCase(); 
};

module.exports = colorGen;

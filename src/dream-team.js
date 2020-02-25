module.exports = function createDreamTeam(members) {
    let str = '';
    if(Array.isArray(members)){
    for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string'){
    str += members[i].trim().toUpperCase()[0];
    }}}else{
    return false;
    }
    return str.split("").sort().join("");
    };
    
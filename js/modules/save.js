/**
 * 
 * @param key 
 */
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : [];
    //return JSON.parse(localStorage.getItem(key)) ?? [];
}


/**
 * 
 * @param {String} key 
 * @param {array} data 
 */
function saveData(key,data) {
   localStorage.setItem(key,JSON.stringify(data));
}

export {getData, saveData}
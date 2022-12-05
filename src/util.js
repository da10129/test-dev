export function isArray(value){
    return Object.prototype.toString.call(value) === '[object Array]';
};

export function isObject(value){
    return typeof value === 'object' && value !== null && !isArray(value);
};


export function isEmpty(value) {
    if(!value){
        return true;
    };
    if(typeof value === 'string' && value === ''){
        return true;
    }
    if(isArray(value) && value.length === 0){
        return true;
    }
    if(isObject(value) && Object.keys(value).length === 0) {
        return true;
    }
}
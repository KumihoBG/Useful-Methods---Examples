/**
 * Clones all properties of an existing object into an empty one.
 * @param {object} param1 
 * Original source object to be copied.
 * @param {object} param2 
 * A target object where to copy the source object properties.
 * @returns {object} the modiefied cloned copy
 */
 
function cloneObject(param1, param2) {
    
    for (let key in param1) {
        if (typeof param1[key] === "object") {
            param2[key] = {};
 
            cloneObject(param1[key], param2[key]);
        } else {
            param2[key] = param1[key];
        }
    }
 
    return param2;
}
 
// The original object to be cloned
const user = {
    "name": "John",
    "age": 30,
    "sizes": {
        "height": 182,
        "width": 50,
        "weight": 82,
    },
    "metaData": {
        "isAdmin": false,
        "lastLogin": "January 27 2021",
        "profile": {
            "userName":  "john78",
            "email": "john78@mail.com",
            "birthDate": "October 05 1978",
        },
    },
};
 
// Empty object to be filled in with all properties of the original one
let clone = {};
 
cloneObject(user, clone);
 
// Checking if cloning was successful
// Expected results:
// Object.is(user, clone) => false
// Object.is(user.sizes, clone.sizes) => false
// Object.is(user.metaData, clone.metaData) => false
// Object.is(user.metaData.profile, clone.metaData.profile) => false
export function formDataToObject(formData){
	let obj = {}
	for(let pair of formData.entries()) {
		//If not exist in the object, add the item
		if(!obj[pair[0]]){
			obj[pair[0]] = pair[1];
		}
		//If already exist, convert it to array, and push the new item
		else{
			if(Array.isArray(obj[pair[0]])){
				obj[pair[0]].push( pair[1] )
			}
			else{
				obj[pair[0]] = [ obj[pair[0]], pair[1] ]
			}
		}
	}
	return obj;
}

/**
 * Check if variable is an object
 * @param {*} variable 
 * @returns Boolean
 */
export function isObject(variable){
	return typeof variable === 'object' && variable !== null
}
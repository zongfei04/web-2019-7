
import {SERVER,API_CONFIG}
const getApiObj= ()=>{
	const apiObj = {}
	for(let key in API_CONFIG){
		let url = SERVER + API_CONFIG[key][0] 
            let method = API_CONFIG[key][1]
            return request(url,method,data)

	}




	return apiObj

}

export default getApiObj
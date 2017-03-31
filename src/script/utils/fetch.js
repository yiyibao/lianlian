
function fetchData(url,data,callback){
	fetch(url,data).then((res) => {
		return res.json()
	}).then((res) => {
		callback(res);
	})

}








export default fetchData;






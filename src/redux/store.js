import {createStore} from "redux"
function changer(state={title:"BANG-DAN"},action) {
	switch(action.type){
		case 'SETTITLE':
			return {title:action.title}
		default:
			return state
	}
	
}
//Redux state----->props
function mapStateToProps(state) {
	return {
		value:state.title
	}
}

//Redux action----->props
function mapDispathToProps(dispath) {
	return {
		onChange:(action)=>dispath(action)
	}
}
let store = createStore(changer)
export {mapStateToProps,mapDispathToProps,store}
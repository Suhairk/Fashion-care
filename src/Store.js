
import {createStore} from 'redux'
import{allProductReducer} from '../src/redux/reducers/ProductReducer'



const store = createStore(allProductReducer)

export default store
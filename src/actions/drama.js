import { GET_ALL_DRAMA, GET_TOP10_DRAMA, GET_MY_DRAMA} from './ActionTypes'

import axios from 'axios'

export function getAllDrama () {
  return (dispatch) => {
    return axios.get('/api/drama/')
      .then((response) => {

        dispatch({
          type: GET_ALL_DRAMA,
          data: response.data
        })
      }).catch((error) => {
    })
  }
}

// export function getData(data){
//   return {
//     type:GET_MY_DRAMA
//     // data : ['test']
//   }
// }

export function getMyDrama (id) {
  return (dispatch) => {
    return axios.get('/api/drama')
      .then((response) => {
        dispatch({
          type: GET_MY_DRAMA,
          data: response.data
        })
      }).catch((error) => {
        console.log(error)
    })
  }
}

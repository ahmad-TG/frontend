import { getApiNoAuth } from '../utils'

export default {
    userLogin(){
        return getApiNoAuth()
        .get('/admin',{
            
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}
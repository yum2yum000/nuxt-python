export default async function({store}){
    const requestList=[]
    const isAuthenticated=store.getters['auth/isAuthenticated']
    console.log('isAuthenticated',isAuthenticated)
    if(isAuthenticated){
        console.log('888')
        requestList.push(store.dispatch('profile/fetchIdentity'))
    }
    if(process.server){
        return Promise.all(requestList)
    }
    else{
        Promise.all(requestList)
    }

}
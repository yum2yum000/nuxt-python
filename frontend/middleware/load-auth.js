export default async function({store,$checkRoutes,redirect,route}){
    await store.dispatch('auth/initAuth')
    
    const isAuthenticated = store.getters['auth/isAuthenticated']
    console.log('isAuthenticated',isAuthenticated)
    if($checkRoutes.shouldInitAuth()){
        
        if(!isAuthenticated){
            return redirect('/login')
        }
        
       
        
    }
    
    else if(route.path=='/login' && isAuthenticated){
        return redirect('/')
       }
    
    
    
    
    }
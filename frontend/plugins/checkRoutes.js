export default function(context,inject){
    console.log('reeeeeeeeee',context.route.path)
 const compare=(arr)=>{
     console.log('gg',arr)
   return arr.some((item)=>{
    console.log('item',item)
       if(item.regex){
        const re=new RegExp(item.regex.join('|'),'g')
        return re.test(context.route.path)
       }
       else{
         return item===context.route.path
       }
   })
 }
  
    
    

inject('checkRoutes',{
    shouldInitAuth(){
        return compare(process.env.authRoutes || [])
    }
})

 }















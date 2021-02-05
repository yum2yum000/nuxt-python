export default{
    data(){
        return{
            dropShow:'',
            menus:[
                {
               id:2,
              menuTitle:'خانه',
              route:'/',
              subMenu:[
              ]
            },
            {
              id:4,
              menuTitle:'تماس با ما',
              route:'/',
              subMenu:[
                 {name:'تلفن'}, {name:'ایمیل'}
              ]
            },
             {
              id:5,
              menuTitle:'خدمات',
              route:'/',
              subMenu:[
                {name:'برنامه نویسی',img:'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk'},
                 {name:'طراحی سایت',img:'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk'},
                 {name:'دیزاین',img:'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk'},
              ]
            },
          
            {
               id:3,
              menuTitle:'ثبت نام',
              route:'register',
              subMenu:[
              ]
            }
       
            ]
        }
    }
}
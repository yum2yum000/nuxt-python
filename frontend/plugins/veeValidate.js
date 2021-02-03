import { extend } from "vee-validate";
import { required,min,email,max,length } from "vee-validate/dist/rules";


extend("required",required)
extend("min",min)
extend("max",max)
extend("email",email)
extend("length",length)
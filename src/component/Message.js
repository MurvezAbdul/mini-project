import  React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleString('en-US',{hour:'numeric',minute:'numeric',second:'numeric',hour12:true})
        }
    }
     render(){
         return(
         <div>
             {this.props.msg} {this.state.time}
         </div>
         )}
}
export default Message
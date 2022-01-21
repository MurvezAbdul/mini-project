import  React,{Component} from 'react';
import MessageArea from './MessageArea';
import Message from './Message';
class MessageList extends Component{
    constructor(){
        super();
        this.state={
            opposite:[]
        }
    }
    addData=(i)=>{
        console.log("from msglist",i)
        this.setState({
            opposite:[...this.state.opposite,i]
        })
    }
     render(){
         return(
         <div>
            <MessageArea onSubmit={this.addData}/>
            {
                this.state.opposite.map(s=>(
                    <Message msg={s.i}/>
                ))
            }
         </div>
    )}
}
export default MessageList
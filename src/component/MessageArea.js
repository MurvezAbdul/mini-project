import  React,{Component} from 'react';

class MessageArea extends Component{
     constructor(){
         super();
        this.state={
            txt:""
     }
    
}
sendData=()=>{
    this.props.onSubmit({
        i:this.state.txt
    })
    this.setState({
        txt:""
    })
}
storeTxt=(m)=>{
    this.setState({
    [m.target.name]:m.target.value 
    })
}
render(){
         return(
         <div>
            <input type="text" name="txt" value={this.state.txt} placeholder="type here" onChange={this.storeTxt}/>
        <button onClick={this.sendData}>click</button> </div>
    )}
}
export default MessageArea
import React, {Component, Fragment} from "react";
import './AppClass.css';

export default class AppClass extends Component{
    constructor(props) {
        super(props);
        this.state={
            isTrue: false,
        };
        return 
    }

    toggleTrue = () =>{
        if (this.state.isTrue){
            this.setState({
                isTrue: false,
            });
            return
        }
        this.setState({
            isTrue: true,
        
        })
    }
    render(){
        return(
           <>
             <hr />
            <h1 className="h1-blue">{this.props.msg}</h1>
            <hr />
            {this.state.isTrue &&

                <Fragment>
                    <p>The current value is True</p>
                </Fragment>
            }
            <hr />
            {this.state.isTrue
                ? <p>isTrue</p>
                :<p>isFalse</p>
            }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleTrue}>Toggle is true</a>
           
           
           </>
        );
    }
}


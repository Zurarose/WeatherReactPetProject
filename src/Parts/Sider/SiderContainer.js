import React from "react";
import {connect} from "react-redux";
import SideMenu from "./SideMenu";
import {getWeatherThunk} from "../../Redux/SideMenuReducer";

class SideContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log()
        this.props.getWeatherThunk()

    }

    render() {
        console.log("here")
        return (<SideMenu Side={this.props.Side}/>)
    }


}

function mapStateToProps(state){

    return{
       Side: state.Side.data
    }
}


export default connect(mapStateToProps, {getWeatherThunk})(SideContainer)
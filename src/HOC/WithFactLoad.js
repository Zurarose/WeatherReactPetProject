import React from 'react'
import {useNavigate} from "react-router";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        //isLoaded: state.FactPage.isLoaded
    }
}

export const WithFactLoad = (Component) => {
    class IsLoadedFact extends React.Component {
        render() {
            /*if (!this.props.isLoaded) {
                return <div>Nothing to show</div>
            }*/
            return (<Component {...this.props}/>)

        }
    }
    let connecteIsLoaded = connect(mapStateToProps)(IsLoadedFact)
    return connecteIsLoaded
}
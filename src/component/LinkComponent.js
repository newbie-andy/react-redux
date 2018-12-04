import React, { Component } from 'react';

class LinkComponent extends Component {
    render() {
        let { active, children, onClick } = this.props;
        if(active) {
            return (
                <span>{ children }</span>
            )
        }
        return (
            <a href=""  onClick={e => {
                e.preventDefault()
                onClick()
              }} >{ children }</a>
        )
    }
}

export default LinkComponent;
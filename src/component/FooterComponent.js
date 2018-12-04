import React, { Component } from 'react';
import LinkFiltter from '../containers/LinkFiltter';

class FooterComponent extends Component {

    render() {
        return (
            <p>
                Show:
                {' '}
                <LinkFiltter filter="SHOW_ALL">
                All
                </LinkFiltter>
                {', '}
                <LinkFiltter filter="SHOW_ACTIVE">
                Active
                </LinkFiltter>
                {', '}
                <LinkFiltter filter="SHOW_COMPLETED">
                Completed
                </LinkFiltter>
            </p>
        )
    }
}



export default FooterComponent;
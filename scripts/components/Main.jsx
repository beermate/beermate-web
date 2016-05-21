'use strict';

import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    render() {
        let bubbleClassName = 'bubble bubble--paused';
        if (!this.state.isLoading) {
            bubbleClassName = 'bubble';
        }

        return (
            <main>
                <img className="beer" src="/img/beer-1.svg"/>
                <div className={bubbleClassName}></div>
            </main>
        );
    }
}
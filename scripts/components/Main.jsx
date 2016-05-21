'use strict';

import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            level: 0.2,
            beer_on_mat: true
        };

        this.handleWebSocket();
    }

    handleWebSocket() {
        this.webSocket = new WebSocket('ws://echo.websocket.org');

        // ws://192.168.0.138:2794
        // http://192.168.0.138:3000/

        this.webSocket.onopen = function () {
            this.webSocket.send(JSON.stringify({
                id: 1,
                level: 0.4,
                beer_on_mat: true
            }));
        }.bind(this);

        // Log messages from the server
        this.webSocket.onmessage = function (event) {
            this.setState(JSON.parse(event.data));
        }.bind(this);
    }

    getBeerImage() {
        let image = '/img/beer-6.svg';
        let level = this.state.level;

        if (0 === level) {
            image = '/img/beer-1.svg';
        } else if (level < 0.25) {
            image = '/img/beer-2.svg';
        } else if (level < 0.5) {
            image = '/img/beer-3.svg';
        } else if (level < 0.75) {
            image = '/img/beer-4.svg';
        } else if (1 !== level && level > 0.75) {
            image = '/img/beer-5.svg';
        }

        return image;
    }

    render() {
        return (
            <main>
                <img className="beer" src={this.getBeerImage()}/>
                <div className="bubble"></div>
            </main>
        );
    }
}
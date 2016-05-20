'use strict';

import React from 'react';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <header>
                    <h1>Beermate</h1>
                </header>
                <section className="intro">
                    <p>Never run out of beer!</p>
                </section>
            </main>
        );
    }
}
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function Test(props) {
    return (
        <div className="docMainWrapper wrapper">
            <Container className="mainContainer documentContainer postContainer">
                <h1>Hello t_o_d</h1>
                <p>I am t_o_d</p>
            </Container>
        </div>
    );
}

module.exports = Test;
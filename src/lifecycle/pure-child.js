import React, { Component, PureComponent } from 'react'

export default class PureChild extends PureComponent {
    render() {
        console.log("purechild");
        return (
            <div>
                <h3>purechild</h3>
            </div>
        )
    }
}

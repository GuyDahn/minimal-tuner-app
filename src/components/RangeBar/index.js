import React, { Component } from "react";

import { Container } from "./styles";
import SemiCircleProgressBar from 'react-progressbar-semicircle'

export default class RangeBar extends Component {
    render() {
        let { value } = this.props;
        if (-5 <= value && value <= 5) {
            value = 50
        } else if (value < 0) {
            value = 50 - Math.abs(value)
        } else {
            value = balue + 50
        }

        return (
            <Container>
                <SemiCircleProgressBar
                    percentage={value}
                    background={"#282c34"}
                    orientation={"down"}
                />
            </Container>
        )
    }
}
import React, {Component} from "react";
import Demo from "./demo.js";
// import "../../public/particles/sketch.js"

class Particle extends Component {
    state = {
        particle: {},
    }

    componentDidMount() {
        this.setState({ particle: new Demo() });
    }

    render() {
        return (
            <div id="container"></div>
        )
    }
}

export default Particle;
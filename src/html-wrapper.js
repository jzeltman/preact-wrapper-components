import { h, Component } from "preact";

export default class HTMLWrapper extends Component {
    constructor() {
        super();
        this.getMarkup.bind(this);
    }
  
    getMarkup(prop) {
        return { __html: prop };
    }
  
    render() {
        return (
            <div dangerouslySetInnerHTML={this.getMarkup(this.props.html)}></div>
        )
    }
};
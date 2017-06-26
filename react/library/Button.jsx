import * as React from "react";

export class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
    }

    render() {
        const {caption, onClick} = this.props;

        return (
            <div
                className="Button"
                onClick={(event) => {onClick(event)}}
            >
                {caption}
            </div>
        );
    }
}

import * as React from "react";
import { Button } from '../library/Button';
import { Logo } from '../components/Logo';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
    }

    render() {
        return (
            <div className="Header">
                <Logo />
                <Button
                    caption="This is a button!"
                    onClick={()=>null}
                />
            </div>
        );
    }
}

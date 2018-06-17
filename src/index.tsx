import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./component/Hello";

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <Hello />
        );
    };
}

ReactDOM.render(
    <Main />,
    document.getElementById("main")
);
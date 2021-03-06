import React from "react";

class ChoicePreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    }

    toggleSelected = () => {
        this.setState(state => ({
            selected: !state.selected
        }))
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectType === "singleSelect" && this.props.index
            !== this.props.currentSelectedChoice
            && this.state.selected) {
            this.setState({
                              selected: false
                          })
        }

    }

    render() {
        let choiceStyle;

        if (this.state.selected) {
            choiceStyle = {background: "lightblue", margin: "5px"}
        }

        if (!this.state.selected && this.props.defaultSelection) {
            choiceStyle = {background: "lightgrey", margin: "5px"}
        }

        return (
            <div className={"row"}>

                <div className={'col-sm-6'}>
                    <div className={"rounded wbdv-padding-button"} style={choiceStyle}
                         onClick={() => {
                             if (this.props.selectType === "multiSelect") {
                                 this.toggleSelected();
                             }

                             if (this.props.selectType === "singleSelect") {
                                 if (this.state.selected) {
                                     this.toggleSelected();
                                     this.props.setCurrentSelectedChoice(-1);
                                 } else {
                                     this.toggleSelected();
                                     this.props.setCurrentSelectedChoice(this.props.index);
                                 }
                             }
                         }}>
                        <h5>{this.props.choice.title}</h5>
                    </div>
                </div>
                <div className={'col-sm-3'}/>
            </div>

        );
    }
}

export default ChoicePreview;

import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import FormComponent from "./FormComponent";
import DictionaryComponent from "./DictionaryComponent";

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            component: null
        }
    }

    setMultiplier = () => {
        this.setState({component: <FormComponent formTitle={"My Form Title"}/>});
    };

    setDictionary = () => {
        this.setState({component: <DictionaryComponent/>});
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 100
                }}>
                    <Button title={'Multiplier'} onPress={this.setMultiplier}/>
                    <Button title={'Dictionary'} onPress={this.setDictionary}/>
                </View>

                {this.state.component}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    text_input: {
        width: 150,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    }
});

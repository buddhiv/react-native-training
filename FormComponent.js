import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';

type Props = {};
export default class FormComponent extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            multiplier: 0,
            result: 0
        };
    }

    handleValueChange = (input) => {
        let result = input * this.state.multiplier;

        this.setState({result: result, value: input});
    };

    handleMultiplierChange = (input) => {
        let result = input * this.state.value;

        this.setState({result: result, multiplier: input});
    };

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 20
            }}>
                <Text style={styles.result_font}>{this.props.formTitle}</Text>
                <View style={styles.flex_row}>
                    <View style={styles.flex_column}>
                        <Text>Value</Text>
                        <TextInput style={styles.text_input} value={this.state.value}
                                   onChangeText={this.handleValueChange}/>
                    </View>
                    <View style={styles.flex_column}>
                        <Text>Multiplier</Text>
                        <TextInput style={styles.text_input} value={this.state.multiplier}
                                   onChangeText={this.handleMultiplierChange}/>
                    </View>
                </View>
                <Text style={styles.result_font}>Result : {this.state.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex_row: {
        flexDirection: 'row'
    },
    flex_column: {
        flexDirection: 'column'
    },
    text_input: {
        width: 150,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    },
    result_font: {
        fontSize: 20
    }
});

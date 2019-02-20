import React, {Component} from 'react';
import {View, Text, TextInput, Button, Alert, ActivityIndicator} from 'react-native';

export default class DictionaryComponent extends Component<Props> {
    state = {
        entry: '',
        definitions: [],
        loading: false
    };

    getDefinition = () => {
        if (this.state.entry === '') {
            Alert.alert('Invalid Entry');
        } else {
            this.setState({loading: true});

            let url = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + this.state.entry;

            fetch(url, {
                method: 'GET',
                headers: new Headers({
                    'app_id': '41a42ddb', 'app_key': 'a12cb47260eac082c9515cf970636249'
                }),
            }).then((response) => {
                this.setState({loading: false});

                if (response.status === 200) {
                    let result = JSON.parse(response._bodyText);
                    let definitions = result.results[0].lexicalEntries[0].entries[0].senses;

                    this.setState({definitions: definitions});
                } else {
                    this.setState({definitions: []});
                    Alert.alert('Invalid Entry');
                }
            });
        }
    };

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 20
            }}>
                <View style={{
                    marginBottom: 30
                }}>
                    <Text style={{fontSize: 20}}>Your Mini Dictionary</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 200
                    }} value={this.state.entry} onChangeText={(value) => {
                        this.setState({entry: value})
                    }}/>
                    <Button title={'FIND'} onPress={this.getDefinition}/>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    {this.state.loading ? <View>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View> : <View>
                        {
                            this.state.definitions.map((definition) => {
                                return <Text>{definition.definitions[0]}</Text>
                            })
                        }
                    </View>}

                </View>
            </View>
        );
    }
}
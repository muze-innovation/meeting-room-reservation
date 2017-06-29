import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common'
import { connect } from 'react-redux'
import { eventUpdate } from '../actions'

class EventForm extends Component {
    render() {
        return (
            <View> 
                <CardSection>
                    <Input 
                        lable="Name"
                        placeholder="Meeting"
                        value={this.props.name}
                        onChangeText={value => this.props.eventUpdate({prop: 'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        lable="Time"
                        placeholder="HH:mm:ss"
                        value={this.props.time}
                        onChangeText={value => this.props.eventUpdate({prop: 'time', value})}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'row' }}>
                    <Text style={styles.pickerTextStyle} >
                        Date
                    </Text>
                    <Picker 
                        style={{flex: 1}}
                        selectedValue={this.props.date}
                        onValueChange={(value) => this.props.eventUpdate({prop:'date', value})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wendnesday" value="Wendnesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />

                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps in employee form call')
    const { name, time, date } = state.eventForm
    return { name, time, date }
}


export default connect(mapStateToProps, {eventUpdate})(EventForm);
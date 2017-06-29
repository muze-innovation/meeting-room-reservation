import React, { Component } from 'react'
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import { eventUpdate, eventCreate } from '../actions'
import EmployeeForm from './EventForm'

class EventCreate extends Component {

    onButtonPress(){
        const { name, time, date } = this.props
        this.props.eventCreate({ name, time, date: date || 'Monday' })
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>    
        )
    }
}


const mapStateToProps = (state) => {
    const { name, time ,date } = state.eventForm
    return {name, time, date}
} 

export default connect(mapStateToProps, { eventCreate,eventUpdate })(EventCreate);

import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'
import { eventFetch } from '../actions'
import ListItem from './ListItem'

class EventList extends Component {
    componentWillMount(){
        this.props.eventFetch()
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource ({events}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        
        this.dataSource = ds.cloneWithRows(events)
    }

    renderRow(event){
        return <ListItem event={event} />
    }

    render() {
        return (
            <ListView 
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const events = _.map(state.events, (val, uid) => {
        return { ...val, uid }
    })
    return { events }
}

export default connect(mapStateToProps,{eventFetch})(EventList);
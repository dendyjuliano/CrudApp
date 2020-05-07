import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { editBlogs } from '../actions'
import { connect } from 'react-redux'

class Edit extends Component {

    state = {
        title: this.props.route.params.title,
        content: this.props.route.params.content,
        key: this.props.route.params.key
    }

    submit = () => {
        this.props.editBlogs(this.state.title, this.state.content, this.state.key)
        this.setState({
            title: '',
            content: '',
            key: ''
        })
        this.props.navigation.navigate('Blogs')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> I Edit </Text>
                <TextInput style={styles.textInput} placeholder='input title' onChangeText={title => this.setState({ title })} value={this.state.title}></TextInput>
                <TextInput style={[styles.textInput, { height: 90 }]} placeholder='input content' onChangeText={content => this.setState({ content })} value={this.state.content}></TextInput>
                <Button title='Submit' onPress={this.submit}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 30
    },
    textInput: {
        marginTop: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default connect(null, { editBlogs })(Edit);

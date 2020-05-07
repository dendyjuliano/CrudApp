import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { postBlogs } from '../actions'
import { connect } from 'react-redux'

class Post extends Component {

    state = {
        title: '',
        content: ''
    }

    submit = () => {
        this.props.postBlogs(this.state.title, this.state.content)
        this.setState({
            title: '',
            content: ''
        })
        this.props.navigation.navigate('Blogs')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> I Post </Text>
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

export default connect(null, { postBlogs })(Post);

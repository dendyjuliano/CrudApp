import React, { Component, isValidElement } from 'react'
import { Text, View, StyleSheet, Button, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native'
import { getBlogs, deleteBlogs } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler'

class Blogs extends Component {

    componentDidMount() {
        this.props.getBlogs()
    }

    render() {
        return (
            <View View style={styles.container} >
                {
                    this.props.loadingReducer
                        ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size='large'></ActivityIndicator>
                            <Text style={{ marginTop: 10, fontSize: 15 }}>Plese Wait</Text>
                        </View>
                        :
                        <FlatList
                            style={{ width: '100%' }}
                            showsVerticalScrollIndicator={false}
                            data={this.props.listOfBlogs}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.blogs}>
                                        <Text style={styles.textTitle}>{item.title}</Text>
                                        <Text style={styles.textContent}>{item.content}</Text>
                                        <View style={styles.action}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit', { ...item })}>
                                                <View style={styles.btnEdit}>
                                                    <Icon size={30} color='white' name='edit'></Icon>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.props.deleteBlogs(item.key)}>
                                                <View style={styles.btnHps}>
                                                    <Icon size={30} color='white' name='close'></Icon>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        ></FlatList>
                }
            </View >
        )
    }
}

function mapStateToProps(state) {

    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key: key
        }
    })

    return {
        listOfBlogs,
        loadingReducer: state.loadingReducer.loadingReducer
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    },
    blogs: {
        elevation: 8,
        borderRadius: 15,
        backgroundColor: '#0652DD',
        padding: 20,
        marginBottom: 15
    },
    textTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    textContent: {
        fontSize: 15,
        lineHeight: 30,
        color: '#fff',
        marginLeft: 10
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 25
    },
    btnEdit: {
        marginRight: 15
    },
    btnHps: {

    }
})

export default connect(mapStateToProps, { getBlogs, deleteBlogs })(Blogs);

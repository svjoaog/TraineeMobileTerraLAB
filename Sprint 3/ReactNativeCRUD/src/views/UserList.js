import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from '@rneui/base';
import UsersContext from '../context/UsersContext';

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function getActions(user){

        function confirmUserDeletion(user){
            Alert.alert('Excluir Usuário', 'Deseja escluir o usuário?', [
                {
                    text: 'Sim',
                    onPress(){
                        dispatch({
                            type: 'deleteUser',
                            payload: user,
                        })
                    }
                },
                {
                    text: 'Não'
                }
            ])
        }
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color={'orange'}/>}
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color={'red'}/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                rightElement= {getActions(user)}
                
    </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    );
};
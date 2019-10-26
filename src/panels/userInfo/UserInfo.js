import React, {useState, useEffect} from 'react';
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import connect from "@vkontakte/vk-connect";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Group from '@vkontakte/vkui/dist/components/Group/Group';

class UserInfo extends React.Component {

    state = {
        user: null,
    }

    constructor(props) {
        super(props)


        async function fetchData() {
            return await connect.sendPromise('VKWebAppGetUserInfo');
        }

        let user = fetchData();

        user.then((result) => {
            this.setState({user: result})
        })
    }

    render() {

        return (
            this.state.user &&
            <Group title="Обо мне">
                <Cell
                    before={this.state.user.photo_200 ? <Avatar src={this.state.user.photo_200}/> : null}
                    description={this.state.user.city && this.state.user.city.title ? this.state.user.city.title : ''}
                >
                    {`${this.state.user.first_name} ${this.state.user.last_name}`}

                </Cell>
            </Group>
        );
    }
}

export default UserInfo

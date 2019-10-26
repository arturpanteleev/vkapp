import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import './PictureGen.css';

const osName = platform();

class PictureGen extends React.Component {

    state = {
        url: "https://picsum.photos/500"
    }

    render() {
        return <PictureGenView
            id={this.props.id}
            go={this.props.go}
            changePicture={this.changePicture}
            url={this.state.url}
        />
    }

    changePicture = () => {
        this.setState({url: "https://picsum.photos/500?aaa=" + Math.floor(Math.random() * Math.floor(1000000))})
    }

}

const PictureGenView = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Генератор картинок
        </PanelHeader>

        <img className="picture" id="picture" src={props.url} alt=""/>
        <Button size="xl" level="2" onClick={props.changePicture}>
            Новая картинка
        </Button>
    </Panel>
);

PictureGenView.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    changePicture: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
};

export default PictureGen;
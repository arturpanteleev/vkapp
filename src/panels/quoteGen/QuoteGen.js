import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const QUOTE_URL = "https://www.randomtext.me/api/lorem/ul-5/5-15";
const osName = platform();

class QuoteGen extends React.Component {

    state = {
        quote: ""
    };

    constructor(props) {
        super(props);
        this.changeQuote();
    }

    render() {
        return <QuoteView
            id={this.props.id}
            go={this.props.go}
            quote={this.state.quote}
            changeQuote={this.changeQuote}
        />
    }

    changeQuote = () =>
        fetch(QUOTE_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({quote: data.text_out})
            })
            .catch(error => {
                console.log('Request failed', error)
            });
}


const QuoteView = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Генератор цитат
        </PanelHeader>
        <div>
            {props.quote}
        </div>
        <Button size="xl" level="2" onClick={props.changeQuote}>
            Обновить цитату
        </Button>

    </Panel>
);

QuoteView.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    changeQuote: PropTypes.func.isRequired,
};

export default QuoteGen;

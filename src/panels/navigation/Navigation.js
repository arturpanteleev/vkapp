import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

const Navigation = props => (
    <Group title="Меню навигации">
        <Div>

            <Button size="xl" level="2" onClick={props.go} data-to="myPanel">
                Генератор картинок
            </Button>

            <Button size="xl" level="2" onClick={props.go} data-to="quoteGen">
                Генератор цитат
            </Button>

            <Button size="xl" level="2" onClick={props.go} data-to="persik">
                Show Persik
            </Button>

        </Div>
    </Group>
);

Navigation.propTypes = {
    go: PropTypes.func.isRequired,
    items
};

export default Navigation;

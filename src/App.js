import React, {useState, useEffect} from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/persik/Persik';
import PictureGen from "./panels/pictureGen/PictureGen";
import QuoteGen from "./panels/quoteGen/QuoteGen";

const App = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

    useEffect(() => {
        connect.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);

            }
        });

        setPopout(null)
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };


    return (
        <View activePanel={activePanel} popout={popout}>
            <Home id='home' go={go}/>
            <Persik id='persik' go={go}/>
            <PictureGen id='myPanel' go={go}/>
            <QuoteGen id='quoteGen' go={go}/>
        </View>
    );
}

export default App;


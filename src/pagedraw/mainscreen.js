// Generated by https://pagedraw.io/pages/6556
import MapPanel from 'gs-/containers/MapPanel'
import ReplayStream from '~/components/ReplayStream'
import NavigationContainer from 'gs-/containers/navigation'


import 'gs-/styles/scss/videostreams.scss';

import CameraView from 'gs-/containers/CameraView';
import Pilot_info from './pilot_info';
import React from 'react';
import './mainscreen.css';

function render() {
    return React.createElement('div', {"className": "mainscreen-mainscreen-7"},
        React.createElement('div', {"className": "mainscreen-0"},
            React.createElement('div', {"className": "mainscreen-0-0"},
                React.createElement('div', {"className": "mainscreen-0-0-0"},
                    React.createElement('div', {"className": "mainscreen-image_5"},
                        <ReplayStream store={this.props.store} gsoc={this.props.route.gsoc}/>
                        
                    )
                ),
                React.createElement('div', {"className": "mainscreen-0-0-1"},
                    React.createElement('div', {"className": "mainscreen-image_6"},
                        <MapPanel store={this.props.store} />
                    )
                )
            ),
            React.createElement('div', {"className": "mainscreen-0-1"},
                React.createElement('div', {"className": "mainscreen-0-1-0"},
                    React.createElement('div', {"className": "mainscreen-image-0"},
                        <CameraView name="webcam-front" store={this.props.store}/>
                    )
                ),
                React.createElement('div', {"className": "mainscreen-0-1-1"},
                    React.createElement('div', {"className": "mainscreen-image_7"},
                        <video id="kinect-video" autoPlay></video>
                    )
                )
            ),
            React.createElement('div', {"className": "mainscreen-line-7"}),
            React.createElement('div', {"className": "mainscreen-0-3"},
                React.createElement('div', {"className": "mainscreen-0-3-0"},
                    React.createElement('div', {"className": "mainscreen-rectangle-6"},
                        React.createElement('div', {"className": "mainscreen-0-3-0-0-0"},
                            React.createElement('div', {"className": "mainscreen-image_3"},
                                <NavigationContainer store={this.props.store} route={this.props.route}/>
                            )
                        ),
                        React.createElement('div', {"className": "mainscreen-0-3-0-0-1"},
                            React.createElement('div', {"className": "mainscreen-pilot_component_instance-5"},
                                React.createElement('Pilot_info', {})
                            )
                        )
                    )
                )
            )
        )
    );
};

export default function(props) {
    return render.apply({props: props});
}
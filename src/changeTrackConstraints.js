'use strict';

import { NativeModules } from 'react-native';

const { WebRTCModule } = NativeModules;

export default function changeTrackConstraints(trackId, constraints = {}) {
    return WebRTCModule.changeTrackConstraints(trackId, constraints)
}

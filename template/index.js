/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Initialzier from "./src/core/Initialzier";

AppRegistry.registerComponent(appName, () => Initialzier);

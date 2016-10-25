/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import App from './app/index.js';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './app/actions'

AppRegistry.registerComponent('TodoList', () => App);


import React from 'react';

import SplashScreen from 'react-native-splash-screen';

export default class Splash extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}
}
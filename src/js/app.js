console.time('Initialize');
import App from './app/index';

const app = new App();

app.init(function () {
	console.log('%cEpsilon Naught', 'color: #338656; font: 50px sans-serif;');
	console.debug(this);
	console.timeEnd('Initialize');
});

import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'c0a224fe739b44228e7865b575820201',
        });
    }
}

export default AppLoader;

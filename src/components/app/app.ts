import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataArticles, ISource } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data as DataArticles))
        );
        this.controller.getSources((data: Partial<ISource>) => this.view.drawSources(data));
    }
}

export default App;

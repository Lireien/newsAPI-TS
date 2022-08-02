import { ISource, DataArticles } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: DataArticles | undefined): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Partial<ISource>): void {
        const values = data.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

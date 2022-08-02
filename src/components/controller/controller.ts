import AppLoader from './appLoader';
import { VoidCbType } from '../../types/voidCbType';

class AppController extends AppLoader {
    public getSources<T>(callback: VoidCbType<T>): void {
        super.getResp<T>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews<T>(e: Event, callback: VoidCbType<T>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLTemplateElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;

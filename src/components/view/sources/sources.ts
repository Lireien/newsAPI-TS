import './sources.css';
import { TSource } from '../../../types/TSource';

class Sources {
    public draw(data: TSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;
        if (sourceItemTemp === null) {
            throw new Error('Could not find element.');
        }

        data.forEach((item: TSource): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesElement = document.querySelector('.sources') as HTMLTemplateElement;
        sourcesElement.append(fragment);
    }
}

export default Sources;

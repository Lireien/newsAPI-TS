import { ETypes } from '../enums/Etypes';
import { TSource } from './TSource';

export interface ISources {
    status: string;
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISource {
    status: ETypes.string;
    sources: Array<TSource>;
}

export interface Article {
    source: ISources;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    length: number;
}
export interface DataArticles {
    status: string;
    articles: Array<Article>;
}

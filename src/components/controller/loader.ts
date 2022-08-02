import { VoidCbType } from '../../types/voidCbType';

class Loader {
    public baseLink: string;
    public options: Record<string, string>;

    constructor(baseLink: string, options: Record<string, string>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options }: { endpoint: string; options?: Record<string, string> },
        callback: VoidCbType<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<T>('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(endpoint: string, options?: Record<string, string>): string {
        const urlOptions: { [index: string]: string } = {
            ...this.options,
            ...options,
        };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    public load<U>(method: string, endpoint: string, callback: VoidCbType<U>, options?: Record<string, string>): void {
        fetch(this.makeUrl(endpoint, options), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;

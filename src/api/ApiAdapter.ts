export class ApiAdapter {
    private static readonly urlDomain = 'http://localhost:8181';

    protected static fetch<T>(url: string, method: string, body?: any): Promise<T> {
        return fetch(this.getUrl(url), { method, body })
            .then((response) => response.json())
            .catch((err) => {
                console.error(err);
            });
    }

    protected static getUrl(url: string) {
        return `${this.urlDomain}${url}`;
    }
}
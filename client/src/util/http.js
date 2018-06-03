export default class Http {

    static async post(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            return responseData;
    }

    static async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }

    static async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        return await response.json();
    }
}
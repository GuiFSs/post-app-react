export default class Http {
    
    static async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            return responseData;
        }catch (err) {
            throw new Error('something went wrong when trying to post');
        }
        
    }
}
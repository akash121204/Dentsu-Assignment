import axios from "axios";

export const HttpService = {
    get(appendUrl: string) {
        const apiUrl = `https://orchestrationflowapp.azurewebsites.net/${appendUrl}`;

        return axios.get(apiUrl).then(response => response.data)
    }
}

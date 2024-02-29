import {axios} from "./api";

export class ClientService {
    public async getClients() {
        const response = await axios.get("clients");
        if (response.status === 200) return response.data;
        throw response;
    }

    public async getClientProfile(clientId: number) {
        const response = await axios.get("clients/" + clientId);
        if (response.status === 200) return response.data;
        throw response;
    }
}

import {axios} from "./api";

export class PetService {
    public async getPets() {
        const response = await axios.get("pets");
        if (response.status === 200) return response.data;
        throw response;
    }

    public async getPet(petId: number) {
        const response = await axios.get("pets/" + petId);
        if (response.status === 200) return response.data;
        throw response;
    }
}

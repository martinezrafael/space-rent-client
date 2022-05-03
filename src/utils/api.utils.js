import axios from "axios";

class Api {
    constructor(uri) {
        this.api = axios.create({
            baseURL: uri,
        });
    }

    //usuarios

    //criar usuário

    //ler usuários
    getUsers = async () => {
        try {
            const { data } = await this.api.get("/users");
            return data;
        } catch (error) {
            throw error.response;
        }
    };

    //ler usuário

    //atualizar usuário

    //espaços

    //criar espaço

    //ler espaços
    getSpaces = async () => {
        try {
            const { data } = await this.api.get("/spaces");
            return data;
        } catch (error) {
            throw error.response;
        }
    };
}

export default new Api("https://space-rent-api.herokuapp.com/");

import axios from "axios";

class Api {
    constructor(uri) {
        this.api = axios.create({
            baseURL: uri,
        });

        this.api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem("token");
                if (token) {
                    config.headers = {
                        Authorization: `Bearer ${token}`,
                    };
                }
                return config;
            },
            (error) => {
                console.log(error);
            }
        );

        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                if(error.response.status === 401){
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                }
                throw error;
            }
        )

    }

    //usuarios

    //signup

    //login

    login = async (user) => {
        try {
            const { data } = await this.api.post("/auth/login", user);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            return data;
        } catch (error) {
            throw error.response;
        }
    };

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

    //deletar espaço
}

export default new Api("https://space-rent-api.herokuapp.com/");

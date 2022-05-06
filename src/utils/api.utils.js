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
                    localStorage.removeItem('user')
                }
                throw error;
            }
        );
    }

    signup = async (username, password, biography) => {
        try {
            const { data } = this.api.post('/auth/signup', {username, password, biography});
            return data;
        } catch (error) {
            throw error.response;
        }
    }

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

    getProfile = async () => {
        try {
            const { data } = await this.api.get('/user');
            return data;
        } catch (error) {
            
        }
    }

    getUsers = async () => {
        try {
            const { data } = await this.api.get('/users');
            return data;
        } catch (error) {
            throw error.response;
        }
    }

    getSpaces = async () => {
        try {
            const { data } = await this.api.get('/spaces');
            return data;
        } catch (error) {
            throw error.response;
        }
    }

    getEvents = async () => {
        try {
            const { data } = await this.api.get('/events');
            return data;
        } catch (error) {
            throw error.response;
        }
    }

}

export default new Api("https://space-rent-api.herokuapp.com/");

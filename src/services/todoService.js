import axios from 'axios';

class TodoService {

    getAll() {
        return axios.get('http://localhost:3000');
    }

    update(data) {
        return axios.put('http://localhost:3000', data);
    }

    create(data) {
        return axios.post('http://localhost:3000', data);
    }

}

const service = new TodoService();

export default service;

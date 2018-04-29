import axios from 'axios';

class TodoService {

    getAll() {
        return axios.get('http://localhost:3000/todos');
    }

    update(data) {
        let requestData = {
          estimated: data.estimated
        }
        return axios.put('http://localhost:3000/todos/update?id=' + data.id, requestData);
    }

    create(data) {
        return axios.post('http://localhost:3000/todos/create', data);
    }

}

const service = new TodoService();

export default service;

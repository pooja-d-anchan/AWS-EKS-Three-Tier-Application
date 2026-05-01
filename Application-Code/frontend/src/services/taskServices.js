import axios from "axios";
#const apiUrl = process.env.REACT_APP_BACKEND_URL //"http://localhost:8080/api/tasks";
#const apiUrl = "http://api:3500/api/tasks";
const apiUrl = "http://k8s-threetierapp-e47f04be71-1825694294.us-west-2.elb.amazonaws.com/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}

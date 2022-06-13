import axios from 'axios'

export const getRequest = async(url) => {
    console.log('called infra 2');
    const data = await axios.get(url).then(res=>res);
    return data;
}

export const postRequest = async(url,data) => {
    return await axios.post(url,data).then(res=>res)
}

export const putRequest = (url,data) => {
    return axios.put(url,data).then(res=>res)
}
export const deleteRequest = (url) => {
    return axios.delete(url).then(res=>res)
}
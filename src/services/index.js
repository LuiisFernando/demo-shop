import axios from 'axios';


const serviceGet = async url => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (err) {
        return err;
    }
};

const servicePost = async (url, data, config) => {
    try {
        const response = await axios.post(url, data, config);
        return response;
    } catch (err) {
        return err;
    }
};

export { serviceGet, servicePost };
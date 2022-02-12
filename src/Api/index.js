import axios from 'axios';

const client = axios.create({
    baseURL: "https://demo.skylaunch.online/api/",
})

export const getEvents = async () => {
    const {data} = await client.get(`events`);
    return data;
}

export const getEvent = async id => {
    const {data} = await client.get(`events/${id}`);
    return data
}

export const createEvent = async values => {
    const {data} = await client.post(`events`,values)
    return data;
}

export const updateEvent = async (id, values) => {
    const {data} = await client.put(`events/${id}`,values)
    return data;
}

export const uploadFile = async file => {
    const {data} = await client.post(`uploads`, file)
    return data;
}
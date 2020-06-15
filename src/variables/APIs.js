import axios from 'axios';

// const baseURI = `${process.env.REACT_APP_API_URL}api/`;

const axiosInstance = axios.create({
    // baseURL: baseURI,
    timeout: 10000
});


export const API = {
    getData: (location,bloodType,range = 50000) => axiosInstance.post('http://localhost:8000/api/donor/getnearby', {
        geolocation: location,
        bloodTypes:bloodType,
        rangeInMeters: range
    },{
        headers: { 'Content-Type': 'text/plain' }
    }),
    
    setData: (name,location,phone,email,bloodType,donationDate,recoveryDate,age,diseases,address) => axiosInstance.post('http://localhost:8000/api/donor/add', {
        "name": name,
        "geolocation": location,
        "phone": phone,
        "email": email,
        "bloodType": bloodType,
        "recoveryDate": new Date(recoveryDate).toISOString(),
        "recoveryDate": new Date(recoveryDate).toISOString(),
        "age": age,
        "diseases": diseases
    },{
        headers: { 'Content-Type': 'text/plain' }
    }
    )
};
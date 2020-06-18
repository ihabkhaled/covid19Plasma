import axios from 'axios';

// const baseURI = `${process.env.REACT_APP_API_URL}api/`;

const axiosInstance = axios.create({
    // baseURL: baseURI,
    timeout: 10000
});


export const API = {
    getData: (location,bloodType,range = 50000) => axiosInstance.post('https://env-4419716.lon.wafaicloud.com/api/donor/getnearby', {
        geolocation: location,
        bloodTypes:bloodType,
        rangeInMeters: range
    },{
        headers: { 'Content-Type': 'text/plain' }
    }),
    
    setData: (name,location,phone,email,bloodType,donationDate,recoveryDate,age,diseases,address) => axiosInstance.post('https://env-4419716.lon.wafaicloud.com/api/donor/add', {
        "name": name,
        "geolocation": location,
        "phone": phone,
        "email": email,
        "bloodType": bloodType,
        "recoveryDate": new Date(recoveryDate).toISOString(),
        "lastDonationDate": new Date(donationDate).toISOString(),
        "age": age,
        "address": address,
        "diseases": diseases
    },{
        headers: { 'Content-Type': 'text/plain' }
    }
    )
};
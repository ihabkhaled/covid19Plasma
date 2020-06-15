import axios from 'axios';

// const baseURI = `${process.env.REACT_APP_API_URL}api/`;

const axiosInstance = axios.create({
    // baseURL: baseURI,
    timeout: 10000
});


export const API = {
    getData: (location,bloodType,range = 5000) => axiosInstance.get('http://localhost:8000/api/donor/getnearby', {
        data: {
            geolocation: [location],
            bloodTypes:[bloodType],
            rangeInMeters: range
        }
    },{
        headers: { 'Content-Type': 'text/plain' }
    }),
    setData: () => axiosInstance.post('http://localhost:8000/api/donor/add', {
        data: {
            "name": "Nametest",
            "geolocation": [
                0.0,
                0.0
            ],
            "phone": "01000",
            "email": "email@asdasd.co",
            "bloodType": "A+",
            "recoveryDate": "2014-11-12T11:45:26.371Z",
            "age": 18,
            "deseases": [
                "nothing"
            ]
        }
    },{
        headers: { 'Content-Type': 'text/plain' }
    }
    )
};
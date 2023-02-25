import React from 'react';
import './Weather.css';

export default function Weather () {

    let weather = [
        {
            day : "Monday",
            time : "Feb 20, 2023, 7 P.M.",
            temperature : "35",
            description : "Clear Sky"
        },
        {
            day : "Tuesday",
            time : "Feb 20, 2023, 7 P.M.",
            temperature : "35",
            description : "Clear Sky"
        },
        {
            day : "Wednesday",
            time : "Feb 20, 2023, 7 P.M.",
            temperature : "35",
            description : "Clear Sky"
        },
        {
            day : "Thursday",
            time : "Feb 20, 2023, 7 P.M.",
            temperature : "35",
            description : "Clear Sky"
        },
        {
            day : "Friday",
            time : "Feb 20, 2023, 7 P.M.",
            temperature : "35",
            description : "Clear Sky"
        },
        {
            day : "Saturday",
            time : "Feb 20, 2023, 7 P.M.",
            temperature : "35",
            description : "Clear Sky"
        }
    ]

    return (
        <div className="container">
            <div className='bg-secondary text-white m-3 p-3 rounded text-center'>
                <h1 className='text-center'>Static Weather Application</h1>
            </div>
            <div className='d-flex justify-content-between'>
                {weather.length>0 && weather.map((item,index) => (
                    <div className='border text-center p-3 m-3 rounded col-md-2 key={index}'>
                        <p> <b>{item.day} </b></p>
                        <p className='small'> {item.time} </p>
                        <h3> {item.temperature} <sup>o</sup>F </h3>
                        <small> {item.description} </small>
                    </div>
                ))}
            </div>
        </div> 

    )
}
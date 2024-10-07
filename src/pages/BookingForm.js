import React, { useState, useEffect } from 'react'
import { fetchAPI, submitAPI } from "../API/Api";

function BookingForm() {
    const [formInput, setFormInput] = useState({
        "name": '',
        "date": new Date(),
        "res-time": '',
        "guests": 1,
        "occasion": 'Birthday'
    });
    const [submitMessage, setSubmitMessage] = useState("")
    const [availableTime, setAvailableTime] = useState([])
    const [nameError, setNameError] = useState(null)
    const [guestsError, setGuestsError] = useState(null)
    const [dateError, setDateError] = useState(null)
    const [timeError, setTimeError] = useState(null)
    const [occasionError, setOccasionError] = useState(null)

    useEffect(() => {
        const today = new Date();
        let availableTime = fetchAPI(today);
        setAvailableTime(availableTime);
    }, []);

    function isValidDate(dateString) {
        const yyyymmdd = dateString.toString().split("-");
        const dateObj = new Date(
            parseInt(yyyymmdd[0]),
            parseInt(yyyymmdd[1]) - 1,
            parseInt(yyyymmdd[2]) + 1
        );
        if (dateObj < new Date()) return false;
        return true;
    }

    function validateForm() {
        console.log(formInput.name, " klop")
        if (formInput.name === "") {
            setNameError("Please provide a name")
        } else {
            setNameError(null)
        }

        if (formInput.guests < 1) {
            setGuestsError("Minimum acceppted guest is one");
        } else if (formInput.guests > 10) {
            setGuestsError("Maximum acceppted guest is 10");
        } else {
            setGuestsError(null);
        }

        if (formInput.date === "") {
            setDateError("Please provide a booking date");
        } else {
            setDateError(null);
        }
        if (!isValidDate(formInput.date)) {
            setDateError(`Sorry! Reservations not available for this date!`);
        } else {
            setDateError(null);
        }

        if (formInput.time === "") {
            setTimeError("Please provide a booking time");
        } else {
            setTimeError(null);
        }

        if (formInput.occasion === "") {
            setOccasionError("Please provide a occasion");
        } else {
            setOccasionError(null);
        }

        if (
            nameError === null &&
            dateError === null &&
            timeError === null &&
            guestsError === null &&
            occasionError === null
        ) {
            return true;
        } else {
            return false;
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let successSubmit = submitAPI(formInput)
            if (successSubmit) {
                setSubmitMessage("Form successfully submitted");
                setFormInput({
                    "name": '',
                    "date": new Date(),
                    "res-time": '17:00',
                    "guests": 1,
                    "occasion": 'Birthday'
                });
            }
        }
    }

    return (
        <div className='form'>
            <h1>Book a Table</h1>
            <form onSubmit={submitForm}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Please provide your name'
                        value={formInput.name}
                        onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
                    />
                    <span className='error-msg'>{nameError}</span>
                </div>
                <div className="field">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={formInput.date} name="date" onChange={(e) => setFormInput({ ...formInput, date: e.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose time
                        <div className="options">
                            <select value={formInput['res-time']} onChange={(e) => setFormInput({ ...formInput, "res-time": e.target.value })} id="res-time">
                                {availableTime.map(availableTim => {
                                    return <option key={availableTim}>{availableTim}</option>
                                })
                                }
                            </select>
                        </div>
                    </label>
                </div>

                <div className="field guest">
                    <label htmlFor="guests">Guests</label>
                    <input type="number" value={formInput.guests} placeholder="2" name="guests" onChange={(e) => setFormInput({ ...formInput, guests: e.target.value })} />
                </div>
                <div className="field occasion">
                    <label htmlFor="occasion">Occasion (optional)</label>
                    <div className="options">
                        <select value={formInput.occasion} name="occasion" onChange={(e) => setFormInput({ ...formInput, occasion: e.target.value })}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <button className="reserve-btn" type="submit">Book Now</button>
                <p className='submit-msg'>{submitMessage}</p>
            </form>
        </div>
    )
}

export default BookingForm
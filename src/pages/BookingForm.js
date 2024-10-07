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

    useEffect(() => {
        const today = new Date();
        let availableTime = fetchAPI(today);
        setAvailableTime(availableTime);
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
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


// < form onSubmit = { handleSubmit(formSubmit) } >
//     <fieldset>
//         <div className="field">
//             <label htmlFor="name">Full Name</label>
//             <input type="text" placeholder="John Doe" name="name" {...register("name")} />
//             <span className="error-message">{errors.name?.message}</span>
//         </div>
//         <div className="field">
//             <label htmlFor="email">Email</label>
//             <input type="text" placeholder="text@email.com" name="email" {...register("email")} />
//             <span className="error-message">{errors.email?.message}</span>
//         </div>
//         <div className="field">
//             <label htmlFor="telephone">Telephone</label>
//             <input type="tel" placeholder="233 00 000 0000" name="telephone" {...register("telephone")} />
//             <span className="error-message">{errors.telephone?.message}</span>
//         </div>

//         {/*<div className="guestsdate">*/}
//         <div className="field occasion">
//             <label htmlFor="occasion">Occasion (optional)</label>
//             <div className="options">
//                 <select name="occasion" {...register("occasion")}>
//                     <option value="select">Select occasion</option>
//                     <option value="birthday">Birthday</option>
//                     <option value="engagement">Engagement</option>
//                     <option value="anniversary">Anniversary</option>
//                 </select>
//             </div>
//         </div>
//         <div className="field guest">
//             <label htmlFor="guests">Guests</label>
//             <input type="number" placeholder="2" name="guests" {...register("guests")} />
//             <span className="error-message">{errors.guests?.message}</span>
//         </div>
//         {/*</div>*/}

//         <div className="field">
//             <label htmlFor="date">Date & Time</label>
//             <input type="datetime-local" name="date" {...register("date")} />
//             <span className="error-message">{errors.date?.message}</span>
//         </div>
//         <button className="reserve-btn" type="submit">Reserve</button>
//     </fieldset>
//     </form >
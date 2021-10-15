//4. Authenticated `Instructor` can create update and delete a
//`class`. At a minimum, each `class` must have the following properties:

// - `Name`
// - `Type`
// - `Start time`
// - `Duration`
// - `Intensity level`
// - `Location`
// - `Current number of registered attendees`
// - `Max class size`

// figure out what to do w ID
//

import { useContext, useState } from "react";
import { Redirect, } from "react-router";
import { useHistory } from "react-router";
import Axios from 'axios'
import { GlobalPropsContext } from '../GlobalPropsContext'
import "../../App.css"


const initialCreateClassFormValues = { name: "", type: "", time: "", duration: "", intensity: "", location: "", max: ""};

export default function CreateClass() {
    const [createClassFormValues, setCreateClassFormValues] = useState(initialCreateClassFormValues);
    const [classId, setClassId] = useState(0);
    const { isLoading, setIsLoading } = useContext(GlobalPropsContext);
    let history = useHistory();

    const onChange = (e) => {
        setCreateClassFormValues({
            ...createClassFormValues, [e.target.name]: e.target.value
        })
    }

    const minutesFormat = (num) => {
        return createClassFormValues.duration + 'minutes';
    }

    const createClassSubmitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(isLoading);

        //if user === client
        Axios.post('/createClass', createClassFormValues)
            .then(res => {
				setCreateClassFormValues(res.data);
				setClassId(res.data.class_id);
                localStorage.setItem('token', res.data.payload);
                console.log("createClass", res);
                setIsLoading(false);
                history.push('/protected');
            })
            .catch(err => {
                console.log(err);
                <Redirect to="/creatclass" />
            })
        }
    return (
        <div>
            <form onSubmit={createClassSubmitHandler} className="form">
                <h1>Create a Class!</h1>
                <input
                    placeholder="Class Name"
                    name="name"
                    label="name"
                    type="text"
                    id="name"
                    onChange={onChange}
                    value={createClassFormValues.name}
                />
                <input
                    placeholder="Class Type"
                    name="type"
                    label="type"
                    type="text"
                    id="type"
                    onChange={onChange}
                    value={createClassFormValues.type}
                />
            <label>
                <input
                    name="time"
                    label="time"
                    type="datetime-local"
                    id="time"
                    onChange={onChange}
                    value={createClassFormValues.time}
                />
            </label>

                <input
                    placeholder="Duration (min)"
                    format={minutesFormat}
                    name="duration"
                    label="duration"
                    type="number"
                    id="duration"
                    onChange={onChange}
                    value={createClassFormValues.duration}
                />
                    <input
                    placeholder="Intensity (1-5)"
                    min={ 1 } 
                    max={ 5 }
                    name="intensity"
                    label="intensity"
                    type="number"
                    id="intensity"
                    onChange={onChange}
                    value={createClassFormValues.intensity}
                />
                <input
                    placeholder="Location"
                    name="location"
                    label="location"
                    type="text"
                    id="location"
                    onChange={onChange}
                    value={createClassFormValues.location}
                />
                <input
                    Placeholder="Maximum Participants"
                    name="max"
                    label="max"
                    type="number"
                    id="max"
                    onChange={onChange}
                    value={createClassFormValues.max}
                />
                <button type="submit">
                    Create a Class
                </button>
            </form>
        </div>
    )
}

// make sure punch pass is an option for createClass
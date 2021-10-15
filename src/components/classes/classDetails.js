import react, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalPropsContext } from '../GlobalPropsContext';

const ClassDetails = () => {
    const [details, setDetails] = useState();
    const { allClasses } = useContext(GlobalPropsContext);

    const { classId } = useParams();
    console.log(classId);

    let id = allClasses.find(id => id === Number(classId));

    // useEffect(() => {
    //     async function getIndividualClassDetails() {
    //         axios
    //             .get(`https://api/id`)
    //             .then((res) => {
    //                 setDetails(res.data);
    //                 console.log(res.data, "res.data for individual class Details");
    //             })
    //             .catch((err) => {
    //                 console.error("Server Error", err);
    //             })
    //     };
    //     getIndividualClassDetails();
    // })

    return (
        <div>
            <h1>Shows Individual class for {classId}</h1>
        </div>
    )
}

export default ClassDetails;
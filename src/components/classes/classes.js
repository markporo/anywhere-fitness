//5. Authenticated client can search for available 
//classes. At a minimum, they must be 
//able to search by the following criteria:
// - `class time`
// - `class date`
// - `class duration`
// - `class type`
// - `intensity level`
// - `class location`

import react from "react";
import "../../App.css"
import Search from "./search"


export default function Classes() {

    return (
        <div>
            <Search />
            <h1>Shows All Classes Available</h1>
            <p>links to each one individually where client can sign up to take that class</p>
        </div>
    )
}

/// shows all classes and a search input for filtering classes
// click on each class to view indiviual class


import { useEffect, useState } from "react";


const Course = () => {
    const [course,setCourse]=useState([])
    useEffect(()=>{
        fetch('course.json')
        .then(res=> res.json)
        .then(data => setCourse(data))
    },[])
    return (
        <div>
            {
                course.map()
            }
        </div>
    );
};

export default Course;
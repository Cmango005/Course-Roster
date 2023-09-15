import { useEffect, useState } from "react";
import Card from "../Cart/Card";



const Course = () => {
    const [course,setCourse]=useState([])
    useEffect(()=>{
        fetch('course.json')
        .then(res=> res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="">
            <h3>course: {course.length}</h3>
           <div className="grid grid-cols-3">
           {
                course.map(card=> <Card key={card.id} card={card}></Card>)
            }
           </div>
        </div>
    );
};

export default Course;
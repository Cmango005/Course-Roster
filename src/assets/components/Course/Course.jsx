import { useEffect, useState } from "react";
import Card from "../Cart/Card";
import Cart from "../Cart/Cart";



const Course = () => {
    const [course,setCourse]=useState([]);
    const [selectCourse,setSelectedCourse]=useState([]);
    
    useEffect(()=>{
        fetch('course.json')
        .then(res=> res.json())
        .then(data => setCourse(data))
    },[])
    const handleSelectCourse= card=>{
        const isExist=selectCourse.find(item => item.id == card.id);
        if (isExist){
          return  alert("Already Taken");
        }else{
            const newSelectCourse=[...selectCourse,card];
            setSelectedCourse(newSelectCourse);
        }
       
    };

    return (
        <div className="container mx-auto flex gap-20">
            <div className="grid grid-cols-3 gap-10 mt-10 ">
                {
                course.map(card=> <Card 
                    key={card.id}
                     card={card}
                     handleSelectCourse={handleSelectCourse}
                     >

                     </Card>)
                }
            </div>
            
            <div className="mt-10 bg-gray-50 w-80 h-fit  ">
 
               <Cart selectCourse={selectCourse}></Cart>

            </div>
            
          
        </div>
    );
};

export default Course;
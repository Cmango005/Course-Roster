import { useEffect, useState } from "react";
import Card from "../Cart/Card";
import Cart from "../Cart/Cart";



const Course = () => {
    const [course,setCourse]=useState([]);
    const [selectCourse,setSelectedCourse]=useState([]);
    const [remaining,setRemaining]=useState(0);
    const[totalCost,setTotalCost]=useState(0);
    const[totalCredit,setTotalCredit]=useState(0);
    
    useEffect(()=>{
        fetch('course.json')
        .then(res=> res.json())
        .then(data => setCourse(data))
    },[])
    const handleSelectCourse= card=>{
        const isExist=selectCourse.find(item => item.id == card.id);
        let count=card.credit;
        let cost=card.price;
        if (isExist){
          return  alert("Already Taken");
        }else{
            selectCourse.forEach(item=> {
                count=count+item.credit ;
            });
            selectCourse.forEach(item=> {
                cost=cost+item.price ;
            });
           
            const totalRemaining=20-count;
            setTotalCredit(count);
            if(count>=20){
                return alert("You cannot choose course up to 20 credit");
                
            }else{
                
                setRemaining(totalRemaining);
                setTotalCost(cost);
                const newSelectCourse=[...selectCourse,card];
                setSelectedCourse(newSelectCourse);
            }
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

           <Cart selectCourse={selectCourse}
           remaining={remaining}
           totalCost={totalCost}
           totalCredit={totalCredit}></Cart>

        </div>
        
      
    </div>
    );
};

export default Course;
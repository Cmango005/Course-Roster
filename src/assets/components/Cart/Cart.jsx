


const Cart = ({selectCourse,remaining,totalCost,totalCredit}) => {
    
    return (

        <div>
            <div>
                 <h3 className="font-bold text-sky-500">Credit Hour Remaining <span>{remaining}</span> hr</h3>
            </div>
            <hr />
            <div>
                <h3 className="font-bold">Course Name:</h3>
               <ul className="ml-4 list-decimal">
               {
                selectCourse.map(card=> <li key={card.id}>{card.name}</li>)
               }
               </ul>
            </div>
          <hr />
          <div>
            <h3 className="font-bold">Total Credit Hour: {totalCredit}</h3>
          </div>
          <hr />
          <div>
            <h3 className="font-bold">Total Cost: {totalCost} USD</h3>
          </div>

        </div>
    );
};

export default Cart;
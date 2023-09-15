


const Cart = ({selectCourse,remaining,totalCost,totalCredit}) => {
    
    return (

        <div>
            <div>
                 <h3 className="font-bold text-sky-500">Credit Hour Remaining <span>{remaining}</span> hr</h3>
            </div>
            <hr />
            <div>
                <h3 className="font-bold">Course Name:</h3>
               {
                selectCourse.map(card=> <li key={card.id}>{card.name}</li>)
               }
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
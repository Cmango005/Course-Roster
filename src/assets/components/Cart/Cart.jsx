


const Cart = ({selectCourse,remaining,totalCost,totalCredit}) => {
    
    return (

        <div>
            <div >
                 <h3 >Credit Hour Remaining <span>{remaining}</span> hr</h3>
            </div>
            <hr />
            <div>
                <h3 >Course Name:</h3>
               {
                selectCourse.map(card=> <li key={card.id}>{card.name}</li>)
               }
            </div>
          <hr />
          <div>
            <h3 >Total Credit Hour:{totalCredit}</h3>
          </div>
          <hr />
          <div>
            <h3 >Total Cost:{totalCost}</h3>
          </div>

        </div>
    );
};

export default Cart;
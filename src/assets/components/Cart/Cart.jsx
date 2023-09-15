


const Cart = ({selectCourse}) => {
    
    return (
        <div>
            
            {
                selectCourse.map(card=> <li key={card.id}>
                    {card.name}
                </li>)
            }
        </div>
    );
};

export default Cart;
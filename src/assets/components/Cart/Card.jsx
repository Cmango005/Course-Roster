

const Card = ({card}) => {
    const {img,name,description,price,credit,dollar_png,book_png}=card;
    return (
        <div className="" >
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="flex gap-2">
                <span className="font-bold">$</span>
                <h4>Price: {price}</h4>
                <h4>Credit:{credit}</h4>
            </div>
            <button className="px-16 py-2 bg-blue-500 text-white border-2 rounded-2xl border-black">Select</button>
        </div>
    );
};

export default Card;
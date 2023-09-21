

const Card = ({card, handleSelectCourse}) => {
    const {img,name,description,price,credit}=card;
    return (
        <div className="  w-64 bg-slate-50 rounded-lg  shadow-2xl " >
            <img className="w-60 ml-2 mt-2"  src={img} alt="" />
            <h3 className="font-extrabold text-center text-base">{name}</h3>
            <p className="font-normal ml-2">{description}</p>
            <div className="flex gap-14 ml-3">
                <div className="flex">
                <span className="font-bold">$</span>
                <h4 className="font-bold">Price:{price}</h4>
                </div>
                <h4 className="font-bold">Credit: {credit}hr</h4>
            </div>
            <button onClick={()=>handleSelectCourse(card)} className="mb-2 ml-2.5 px-24  py-2 bg-blue-500 text-white border-2 rounded-xl ">Select</button>
        </div>
    );
};

export default Card;
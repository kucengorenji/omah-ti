const PopularCard = ({ image, description, price }) => {
  return (
    <>
      <div className="m-3">
        <div>
          <img className="object-cover h-96 w-96" src={image} />
        </div>
        <p className="text-left">{description}</p>
        <div className="font-bold flex justify-between">
          <p className="p-1">${price}</p>
          <button className="p-1 font-bold rounded hover:bg-gray-100">
            + add to basket
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularCard;

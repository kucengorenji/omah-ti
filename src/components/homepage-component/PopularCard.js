const PopularCard = ({ image, description, price }) => {
  return (
    <>
      <div className="m-3">
        <div>
          <img className="object-cover h-96 w-96" src={image} />
        </div>
        <p className="text-left">{description}</p>
        <div className="font-bold flex justify-between">
          <p>${price}</p>
          <p>+ add to basket</p>
        </div>
      </div>
    </>
  );
};

export default PopularCard;

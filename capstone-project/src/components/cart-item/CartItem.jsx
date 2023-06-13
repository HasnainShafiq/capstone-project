export const CartItem = ({ product }) => {
  const { name, quantity, imageUrl, price } = product;

  return (
    <div className="flex items-center">
      <img src={imageUrl} alt={`${name}`} className="w-[30%] mb-3" />
      <div className="w-[70%] flex flex-col text-sm font-body text-neutral-300">
        <span>{name}</span>
        <span className="font-bold">
          £{price} x {quantity}
        </span>
      </div>
    </div>
  );
};

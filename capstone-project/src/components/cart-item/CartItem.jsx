export const CartItem = ({ product, className }) => {
  const { name, quantity, imageUrl, price } = product;

  return (
    <div className={`flex items-center py-1`}>
      <img src={imageUrl} alt={`${name}`} className="w-[30%]" />
      <div className={`w-[70%] flex flex-col text-sm font-body text-neutral-300 ${className}`}>
        <span>{name}</span>
        <span className="font-bold">
          £{price} x {quantity}
        </span>
      </div>
    </div>
  );
};

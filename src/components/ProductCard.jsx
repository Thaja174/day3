import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const totalAmount = quantity * price;

  return (
    <section className="product-card">
      <h2>Product Details</h2>

      <p>Product: {productName}</p>
      <p>Price: ₹{price}</p>
      <p>Colour: {selectedColor}</p>
      <p>Deliver to: {deliveryCity}</p>

      <hr />

      <h3>Cart Information</h3>

      <p>Cart Quantity: {quantity}</p>
      <p>Total Amount: ₹{totalAmount}</p>

      <p>
        Status:{" "}
        {quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </p>
    </section>
  );
}

export default ProductCard;
export const ITEMS_PER_PAGE = 10;
export const applyDiscount = (price, discountPercentage) => {
  if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
    console.error(
      "Invalid input: Price and discount percentage must be non-negative, and discount percentage must be between 0 and 100."
    );
    return null;
  }
  const discountAmount = (price * discountPercentage) / 100;
  const finalPrice = price - discountAmount;

  return Math.round(finalPrice);
};

function purchaseBook(
  bookTitle,
  bookAuthor,
  bookPrice,
  discountPercentage,
  taxPercentage,
  stockAmount,
  purchasedAmount
) {
  // Calculations
  let remainingStock = stockAmount;
  let totalPrice = 0;

  for (let i = 0; i < purchasedAmount; i++) {
    if (remainingStock === 0) {
      console.log('The book is out of stock.');
      break;
    }

    const discountAmount = bookPrice * (discountPercentage / 100);
    const priceAfterDiscount = bookPrice - discountAmount;
    const taxAmount = priceAfterDiscount * (taxPercentage / 100);
    const priceAfterTax = priceAfterDiscount + taxAmount;

    totalPrice += priceAfterTax;
    remainingStock--;

    console.log(`Purchased Book ${i + 1}`);
    console.log('Book Title:', bookTitle);
    console.log('Book Author:', bookAuthor);
    console.log('Price After Tax:', priceAfterTax);
    console.log('---');
  }

  if (remainingStock > 0) {
    console.log(`You can purchase ${remainingStock} more book(s).`);
  } else {
    console.log('The book is out of stock.');
  }

  console.log('Total Price:', totalPrice);
}

// Example usage
purchaseBook('The Great Gatsby', 'F. Scott Fitzgerald', 25.99, 10, 8, 5, 3);

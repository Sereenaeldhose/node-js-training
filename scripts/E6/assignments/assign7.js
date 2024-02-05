// display values using object destructuring
const item = {
  name: "Shoes",
  size: {
    EU: 14,
    US: 18,
  },
  Status: "live",
};

liveUpdates = ({ name: category, size: { EU: eu, US: us }, Status }) => {
  console.log(
    `The following items are live: \n Category : ${category} \n Available Sizes : EU-${eu} and US-${us} \n Current Stock : ${Status}`
  );
};
liveUpdates(item);
console.log("--------------------");

// convert and display indian rupees to different currencies.

convert = (rupees) => {
  console.log(
    `Indian Rupees ${rupees} equivalent to different currencies : \nUS Doller = ${
      rupees * 0.012
    }\nBritish Pound = ${rupees * 0.0096}\nAustralian Doller =${
      rupees * 0.019
    }\nMexican Peso =${rupees * 0.21}`
  );
};

convert(50);
console.log("--------------------");
convert(5);

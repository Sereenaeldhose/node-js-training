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
  let currencies = {
    Rupees: rupees,
    US_Doller: rupees * 0.012,
    British_Pound: rupees * 0.0096,
    Australian_Doller: rupees * 0.019,
    Mexican_Peso: rupees * 0.21,
  };
  return currencies;
};

const {
  Rupees,
  US_Doller: us_doller,
  British_Pound: british_pound,
  Australian_Doller: australian_doller,
  Mexican_Peso: mexican_peso,
} = convert(50);

console.log(
  `Indian Rupees ${Rupees} equivalent to different currencies : \nUS Doller = ${us_doller}\nBritish Pound = ${british_pound}\nAustralian Doller =${australian_doller}\nMexican Peso =${mexican_peso}`
);

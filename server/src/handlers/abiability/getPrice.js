let getPrice = async (place, dateInit, dateEnd)=>{
  try {
    
    const nightlyRate = place.dataValues.price_per_night; 

    const startDate = new Date(dateInit);
    const endDate = new Date(dateEnd);
    const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    const totalPrice = numberOfNights * nightlyRate;
    return totalPrice;
  } catch (error) {
    console.log('can not calculate price ' + error.message) 
  }
}
module.exports= getPrice;
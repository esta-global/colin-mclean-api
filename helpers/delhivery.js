const axios = require("axios");
const qs = require("querystring"); // Import querystring for URL encoding

module.exports.createDelhiveryOrder = async function (shippingInfo) {
  const url = "https://track.delhivery.com/api/cmu/create.json";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded", // Change to URL-encoded
    Accept: "application/json",
    Authorization: `Token ${process.env.DELHIVERY_API_KEY}`,
  };

  // Constructing the correct format
  const body = {
    shipments: [
      {
        name: shippingInfo.name,
        add: shippingInfo.address,
        pin: shippingInfo.pincode,
        city: shippingInfo.city,
        state: shippingInfo.state,
        country: shippingInfo.country,
        phone: shippingInfo.mobile,
        order: shippingInfo.orderId,
        payment_mode: shippingInfo.paymentMode, // prepaid | COD
        cod_amount: shippingInfo.codAmount,
        shipment_breadth: shippingInfo.breadth,
        shipment_width: shippingInfo.width,
        shipment_height: shippingInfo.height,
        weight: shippingInfo.weight,
      },
    ],
    pickup_location: {
      name: "KIAN ELEGANCE PRIVATE LIMITED",
    },
  };

  // Convert the body to a properly formatted string
  const formattedBody = qs.stringify({
    format: "json",
    data: JSON.stringify(body),
  });

  try {
    const response = await axios.post(url, formattedBody, { headers });
    console.log("Response:", response.data);

    if (response.data?.packages?.[0]?.waybill) {
      console.log("Tracking ID:", response.data.packages[0].waybill);
      console.log("Upload WBN:", response.data.upload_wbn);
    }
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

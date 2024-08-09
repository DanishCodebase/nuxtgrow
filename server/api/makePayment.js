import { defineEventHandler, readBody, sendRedirect, createError } from "h3";
import crypto from "crypto";

function generateTransactionId() {
  const timestamp = new Date().getTime().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 15);
  return timestamp + randomStr;
}

function generateMerchantUserId() {
  return "MUID" + Math.random().toString(36).substr(2, 9);
}

function generateChecksum(payload, saltKey) {
  const sha256Hash = crypto
    .createHash("sha256")
    .update(payload + "/pg/v1/pay" + saltKey)
    .digest("hex");
  const keyIndex = 1;
  return sha256Hash + "###" + keyIndex;
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const merchantTransactionId = generateTransactionId();
    const merchant_id = "M1KE7GMKEOEB";
    const merchantUserId = generateMerchantUserId();
    const salt_key = "56392f2a-82cd-47ec-a0e4-93a115181eb7";

    const data = {
      merchantId: merchant_id,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: merchantUserId,
      name: body.name,
      amount: parseInt(body.amount) * 100,
      redirectMode: "post",
      mobileNumber: parseInt(body.number),
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const checksum = generateChecksum(payloadMain, salt_key);

    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

    const response = await $fetch(prod_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      body: JSON.stringify({ request: payloadMain }),
    });

    if (response.data.instrumentResponse.redirectInfo.url) {
      // Send the redirect URL to the client
      return response.data.instrumentResponse.redirectInfo.url;
    } else {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid response from payment gateway",
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});

// import crypto from "crypto";

// function generateTransactionId() {
//   const timestamp = new Date().getTime().toString(36);
//   const randomStr = Math.random().toString(36).substring(2, 15);
//   return timestamp + randomStr;
// }

// function generateMerchantUserId() {
//   return "MUID" + Math.random().toString(36).substr(2, 9);
// }

// function generateChecksum(payload, saltKey) {
//   const sha256Hash = crypto
//     .createHash("sha256")
//     .update(payload + "/pg/v1/pay" + saltKey)
//     .digest("hex");
//   const keyIndex = 1;
//   return sha256Hash + "###" + keyIndex;
// }

// export default defineEventHandler(async (event) => {
//   try {
//     const body = await readBody(event);

//     const merchantTransactionId = generateTransactionId();
//     const merchant_id = "M1KE7GMKEOEB";
//     const merchantUserId = generateMerchantUserId();
//     const salt_key = "56392f2a-82cd-47ec-a0e4-93a115181eb7";

//     // Example payload generation
//     const data = {
//       merchantId: merchant_id,
//       merchantTransactionId: merchantTransactionId,
//       merchantUserId: merchantUserId,
//       name: body.name,
//       amount: parseInt(body.amount) * 100,
//       redirectMode: "post",
//       mobileNumber: parseInt(body.number),
//       paymentInstrument: {
//         type: "PAY_PAGE",
//       },
//     };

//     const payload = JSON.stringify(data);
//     const payloadMain = Buffer.from(payload).toString("base64");
//     const checksum = generateChecksum(payloadMain, salt_key);

//     const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

//     const response = await $fetch(prod_URL, {
//       method: "post",
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//         "X-VERIFY": checksum,
//       },
//       body: JSON.stringify({ request: payloadMain }),
//     });

//     const redirectURL = response.data.instrumentResponse.redirectInfo.url;
//     return sendRedirect(event, redirectURL);
//   } catch (error) {
//     console.error("Error:", error.message);
//     throw createError({
//       statusCode: 500,
//       statusMessage: "Internal Server Error",
//     });
//   }
// });

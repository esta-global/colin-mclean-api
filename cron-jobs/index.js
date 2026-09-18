const cron = require("node-cron");
const couponModel = require("../database/models/couponModel");

const mongoose = require("mongoose");

async function start() {
  // Example Cron Job: Runs every minute
  cron.schedule("* * * * *", async () => {
    console.log("Cron job executed at:", new Date().toString());

    const state = mongoose.connection.readyState;
    if (state == 1) {
      // update expired coupon
      updateExpiredCoupons();

      // update activated coupon
      updateActivatedCoupons();
    }
  });
}

async function updateExpiredCoupons() {
  try {
    const currentDate = new Date();

    // Find and update all coupons with expiryDate < currentDate
    const result = await couponModel.updateMany(
      {
        expiryDate: { $lt: currentDate }, // Expired coupons
        couponStatus: { $ne: "EXPIRED" }, // Only update if not already EXPIRED
      },
      {
        $set: { couponStatus: "EXPIRED" },
      }
    );

    console.log(
      `Expired Coupons Updated: ${result.modifiedCount} coupon(s) marked as EXPIRED.`
    );
  } catch (error) {
    console.error("Error updating expired coupons:", error);
  }
}

async function updateActivatedCoupons() {
  try {
    const currentDate = new Date();

    // Find and update all coupons with expiryDate < currentDate
    const result = await couponModel.updateMany(
      {
        expiryDate: { $gte: currentDate }, //
        startDate: { $lte: currentDate }, // Activated coupons
        couponStatus: { $ne: "ACTIVE" }, // Only update if not already ACTIVE
      },
      {
        $set: { couponStatus: "ACTIVE" },
      }
    );

    console.log(
      `Activated Coupons Updated: ${result.modifiedCount} coupon(s) marked as ACTIVE.`
    );
  } catch (error) {
    console.error("Error updating expired coupons:", error);
  }
}
module.exports = start;

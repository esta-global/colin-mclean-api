const { default: axios } = require("axios");
const nodemailer = require("nodemailer");

module.exports.sendOTPEmail = async ({
  emailTo,
  subject,
  name = "Guest",
  otp,
}) => {
  try {
    // Create Transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER_NAME, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      // from: process.env.EMAIL_FROM, // sender address
      from: process.env.EMAIL_FROM, // sender address
      to: emailTo, // list of receivers
      subject: subject, // Subject line
      // text: text, // plain text body
      html: `<div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">
        <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
          <div style="background:#ffffff;border:1px solid #e6ebf2;border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(15,23,42,0.08);">
            <div style="padding:28px 28px 20px;background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 100%);color:#ffffff;">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
                <div>
                  <div style="font-size:13px;letter-spacing:1.6px;text-transform:uppercase;opacity:0.8;">Simple Sellers</div>
                  <h1 style="margin:8px 0 0;font-size:24px;line-height:1.2;">Verify your email</h1>
                </div>
                <div style="padding:10px 14px;border-radius:999px;background:rgba(255,255,255,0.12);font-size:13px;">
                  Secure OTP
                </div>
              </div>
            </div>

            <div style="padding:30px 28px 26px;color:#0f172a;">
              <p style="margin:0 0 12px;font-size:16px;line-height:1.7;">Hi <strong>${name}</strong>,</p>
              <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#475569;">
                Use the verification code below to complete your account setup. This code will expire in a few minutes.
              </p>

              <div style="margin:0 0 22px;padding:18px;border:1px dashed #cbd5e1;border-radius:16px;background:#f8fafc;text-align:center;">
                <div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#64748b;margin-bottom:10px;">
                  One-time password
                </div>
                <div style="display:inline-block;padding:14px 26px;border-radius:14px;background:#0f172a;color:#ffffff;font-size:30px;letter-spacing:6px;font-weight:700;">
                  ${otp}
                </div>
              </div>

              <p style="margin:0;font-size:13px;line-height:1.7;color:#64748b;">
                If you did not request this code, you can safely ignore this email.
              </p>
            </div>

            <div style="padding:18px 28px 28px;border-top:1px solid #e6ebf2;background:#fbfdff;color:#64748b;font-size:13px;line-height:1.6;">
              <div style="font-weight:600;color:#0f172a;margin-bottom:4px;">Simple Sellers</div>
              <div>Kolkata</div>
            </div>
          </div>
        </div>
      </div>`, // html body
    });

    return {
      status: true,
      msgId: info.messageId,
      message: "Message Send Successfully",
    };
  } catch (error) {
    // console.log("Helper Error", error.message);
    return { status: false, msgId: null, message: error.message };
  }
};

module.exports.createOTP = function () {
  min = 1000;
  max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.sendOTP = async (mobile, otp) => {
  try {
    const url = `http://125.16.147.178/VoicenSMS/webresources/CreateSMSCampaignGet?ukey=hS4CrDxGD0ReO4OGDQC8CqWNB&msisdn=${mobile}&language=0&credittype=7&senderid=VAIRMO&templateid=41680&message=Your%20OTP%20for%20login%20is%20${otp}.%20Do%20not%20share%20it%20with%20anyone.%20Valid%20for%205%20minutes.%20-%20Victura%20Airmotion&filetype=2`;
    const smsResponse = await axios({
      methd: "get",
      url: url,
    });

    if (
      smsResponse.status == 200 &&
      smsResponse.data.status == "success" &&
      smsResponse.data.value == "accepted"
    ) {
      return {
        status: true,
        message: smsResponse.data.value,
      };
    } else {
      return {
        status: false,
        message: smsResponse.data.value,
      };
    }
  } catch (error) {
    // console.log("Helper Error", error.message);
    return { status: false, msgId: null, message: error.message };
  }
};

module.exports.resendOTP = async (mobile, otp) => {
  try {
    const url = `http://125.16.147.178/VoicenSMS/webresources/CreateSMSCampaignGet?ukey=hS4CrDxGD0ReO4OGDQC8CqWNB&msisdn=${mobile}&language=0&credittype=7&senderid=VAIRMO&templateid=41681&message=As%20requested%2C%20your%20new%20login%20OTP%20is%20${otp}.%20Do%20not%20share%20this%20with%20anyone.%20-%20Victura%20Airmotion&filetype=2`;
    const smsResponse = await axios({
      methd: "get",
      url: url,
    });

    if (
      smsResponse.status == 200 &&
      smsResponse.data.status == "success" &&
      smsResponse.data.value == "accepted"
    ) {
      return {
        status: true,
        message: smsResponse.data.value,
      };
    } else {
      return {
        status: false,
        message: smsResponse.data.value,
      };
    }
  } catch (error) {
    // console.log("Helper Error", error.message);
    return { status: false, msgId: null, message: error.message };
  }
};

module.exports.successfulLoginMessage = async (mobile) => {
  try {
    const url = `http://125.16.147.178/VoicenSMS/webresources/CreateSMSCampaignGet?ukey=hS4CrDxGD0ReO4OGDQC8CqWNB&msisdn=${mobile}&language=0&credittype=7&senderid=VAIRMO&templateid=41684&message=You%20have%20successfully%20logged%20in%20to%20your%20account.%20If%20this%20wasn%27t%20you%2C%20please%20contact%20support%20immediately.%20-%20Victura%20Airmotion&filetype=2`;
    const smsResponse = await axios({
      methd: "get",
      url: url,
    });

    if (
      smsResponse.status == 200 &&
      smsResponse.data.status == "success" &&
      smsResponse.data.value == "accepted"
    ) {
      return {
        status: true,
        message: smsResponse.data.value,
      };
    } else {
      return {
        status: false,
        message: smsResponse.data.value,
      };
    }
  } catch (error) {
    // console.log("Helper Error", error.message);
    return { status: false, msgId: null, message: error.message };
  }
};

module.exports.orderMessage = async (
  orderStatus,
  mobile,
  name,
  orderId,
  trakingUrl = null,
) => {
  try {
    let url = "";
    let baseUrl =
      "http://125.16.147.178/VoicenSMS/webresources/CreateSMSCampaignGet?ukey=hS4CrDxGD0ReO4OGDQC8CqWNB&language=0&credittype=7&senderid=VAIRMO&filetype=2";

    // for PLACED status
    if (orderStatus == "PLACED") {
      let message = `Hi%20${name}%2C%20your%20order%20%23${orderId}%20has%20been%20successfully%20placed.%20We%20will%20notify%20you%20once%20it%27s%20confirmed.%20Thank%20you%20for%20shopping%20with%20us.%20-%20Victura%20Airmotion`;
      url = `${baseUrl}&msisdn=${mobile}&templateid=41685&message=${message}`;
    } else if (orderStatus == "CONFIRMED") {
      let message = `Hi%20${name}%2C%20your%20order%20%23${orderId}%20has%20been%20confirmed%20and%20is%20being%20processed.%20Stay%20tuned%20for%20dispatch%20updates.%20-%20Victura%20Airmotion`;
      url = `${baseUrl}&msisdn=${mobile}&templateid=41686&message=${message}`;
    } else if (orderStatus == "DISPATCHED") {
      let message = `Hi%20${name}%2C%20your%20order%20%23${orderId}%20has%20been%20dispatched.%20Track%20your%20shipment%20here%3A%20${trakingUrl}%20-%20Victura%20Airmotion`;
      url = `${baseUrl}&msisdn=${mobile}&templateid=41690&message=${message}`;
    } else if (orderStatus == "DELIVERED") {
      let message = `Hi%20${name}%2C%20your%20order%20%23${orderId}%20has%20been%20successfully%20delivered.%20We%20hope%20you%20enjoy%20your%20purchase%21%20-%20Victura%20Airmotion`;
      url = `${baseUrl}&msisdn=${mobile}&templateid=41689&message=${message}`;
    } else if (orderStatus == "CANCELLED") {
      let message = `Hi%20${name}%2C%20your%20order%20%23${orderId}%20has%20been%20cancelled.%20If%20you%20didn%E2%80%99t%20request%20this%2C%20please%20contact%20support.%20-%20Victura%20Airmotion`;
      url = `${baseUrl}&msisdn=${mobile}&templateid=41688&message=${message}`;
    }

    const smsResponse = await axios({
      methd: "get",
      url: url,
    });

    if (
      smsResponse.status == 200 &&
      smsResponse.data.status == "success" &&
      smsResponse.data.value == "accepted"
    ) {
      return {
        status: true,
        message: smsResponse.data.value,
      };
    } else {
      return {
        status: false,
        message: smsResponse.data.value,
      };
    }
  } catch (error) {
    // console.log("Helper Error", error.message);
    return { status: false, msgId: null, message: error.message };
  }
};

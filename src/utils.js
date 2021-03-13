import "./env";
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  const ramdomWord = adjectives[randomNumber] + " " + nouns[randomNumber];
  return ramdomWord;
};

// console.log(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

const sendMail = (email) => {
  const auth = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD,
    },
  };
  const client = nodemailer.createTransport(sgTransport(auth));
  return client.sendMail(email, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("response:" + info);
    }
  });
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "ahncho8880@gmail.com",
    to: address,
    subject: "👃acompany에 가입하세요👃",
    html: "<b>hello your login secret it </b>" + secret,
  };
  return sendMail(email);
};

export const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);

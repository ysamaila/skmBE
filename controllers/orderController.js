const Order = require("../models/order");
const nodemailer = require("nodemailer");

/*ADD ONE REVIEW*/
exports.addOrder = (req, res, next) => {
  order = new Order({
    email: req.body.email,
    phone: req.body.phone,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    amount: req.body.amount,
    price: req.body.price,
    country: req.body.country,
    totalPaid: Number(req.body.price) * Number(req.body.amount),
    location: req.body.location,
    item: req.body.item,
    image: req.body.image,
  });

  const emailBody = `
  <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333333;
        }
        p {
          color: #555555;
        }
      </style>
    </head>
    <body>
      <div class="container">

      <div style="width:50%; margin: 0 auto; border-radius:15px;">
      <img
      style="border-radius:15px, width:100%; height:auto"
      src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/302703516_493834659413950_4926351559681213761_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeGDEMXJJD9pAnNBNVZtI48xwCmsR7KqMHvAKaxHsqowe82ve9AmKixTKrTbts3YmRs&_nc_ohc=NqeWtoyaZqAAX-z1euF&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfA6bTNjtjT9ZmrjPpSTgB8g4MPIltPHT3Ga7d6AdJzM4g&oe=65C42B1F"/>
      </div>
        
  <h2 style="text-align:center"> A new Order</h2>
  <hr/>
  <p> <b>Item Name:</b>${req.body.item}</p>
  <p><b> Name:</b> ${req.body.firstName} ${req.body.lastName} </p>
  <p><b> Email:</b> ${req.body.email} </p>
  <p><b> Phone:</b> ${req.body.phone} </p>
  <p> <b>Address:</b> ${req.body.address} </p>
  <p> <b>City:</b> ${req.body.city} </p>
  <p> <b>State:</b> ${req.body.state} </p>
  <p> <b>Country:</b> ${req.body.country} </p>
  <p> <b>Price per one:</b> ₦1500 </p>
  <p> <b>Amount:</b> ${req.body.amount} </p>
  <p> <b>Location:</b> ${req.body.location} </p>
  <p> <b>Image:</b> ${req.body.image} </p>
  <p> <b>Total:</b> ₦${Number(req.body.amount) * Number(req.body.price)} </p>
  <hr/>

  <b><i><p style="font-size:18px;">Thank you for your patronizing Skimake.</p></i></b>

  </div>
    </body>
  </html>
  `;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yusuf.hilside@gmail.com",
      pass: "qplv feiy cipz arfn",
    },
  });

  var mailOptions = {
    from: "yusuf.hilside@gmail.com",
    to: "info@skimake.com",
    bcc: req.body.email,
    subject: "A new Skimake Order",
    html: emailBody,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  order
    .save()
    .then(() => {
      res.status(201).json({
        message: "Added successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

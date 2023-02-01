const User = require('../models/User');

exports.transferController = async (req, res) => {
    const { remitter, userId, daoCoins } = req.body;
    const sender = await User.findOneAndUpdate({userId: remitter}, {daoCoin: daoCoins})
    // const receiver = await User.findOneAndUpdate({ userId: userId });
    // sender.sent.userId = userId
    // sender.sent.daoCoin = daoCoin;
    // sender.daoCoin -= daoCoins;
    // receiver.received.userId = remitter;
    // receiver.received.daoCoin = daoCoin; 
    // receiver.daoCoin += daoCoin;
    console.log(sender)

  res.status(200).json({
    message: "Daocoin transfered",
  });
};

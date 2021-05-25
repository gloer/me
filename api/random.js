module.exports = (req, res) => {
    const rand = Math.ceil(Math.random() * 10);
    res.staus(200).send(String(rand));
};
  
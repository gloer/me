module.exports = (req, res) => {
    const date = new Date().toString();
    const tekst = "Ha det på badet!"
    const data = {
        "dato" : date,
        "tekst" : tekst
    };
    res.status(200).send(data);
  };
  
  
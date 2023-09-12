exports.create = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'portfolio create success' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'portfolio read success' });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'portfolio delete success' });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'portfolio update success' });
};

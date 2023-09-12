exports.create = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'product create success' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'product read success' });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'product delete success' });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'product update success' });
};

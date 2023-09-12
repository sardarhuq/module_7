exports.create = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'comment create success' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'comment read success' });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'comment delete success' });
};
exports.update = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'comment update success' });
};

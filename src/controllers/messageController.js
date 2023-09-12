exports.create = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'message create success' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'message read success' });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'message delete success' });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'message update success' });
};

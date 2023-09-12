exports.create = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'blog create success' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'blog read success' });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'blog delete success' });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'blog update success' });
};

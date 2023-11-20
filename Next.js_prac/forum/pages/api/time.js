export default function handler(req, res) {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return res.status(200).json(time);
}

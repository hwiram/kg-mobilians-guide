const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('KG Mobilians Inquiry API is running');
});

app.post('/api/inquiry', (req, res) => {
  const { name, email, message, store_id } = req.body;
  res.json({
    status: '등록 완료',
    data: { name, email, message, store_id }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

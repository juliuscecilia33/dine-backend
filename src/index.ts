import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`DINE Backend is running on port ${PORT}`);
});

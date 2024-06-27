import express from "express";
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      productName: "laptop1",
      price: 1000,
      description: "laptop1 description",
      category: "laptop",
      image: "laptop1.jpg",
      rating: 4.5,
      numReviews: 10,
      countInStock: 10,
    },
    {
      productName: "laptop2",
      price: 2000,
      description: "laptop2 description",
      category: "laptop",
      image: "laptop2.jpg",
      rating: 4.5,
      numReviews: 10,
      countInStock: 10,
    },
    {
      productName: "laptop3",
      price: 3000,
      description: "laptop3 description",
      category: "laptop",
      image: "laptop3.jpg",
      rating: 4.5,
      numReviews: 10,
      countInStock: 10,
    },
    {
      productName: "laptop4",
      price: 4000,
      description: "laptop4 description",
      category: "laptop",
      image: "laptop4.jpg",
      rating: 4.5,
      numReviews: 10,
      countInStock: 10,
    },
  ];

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

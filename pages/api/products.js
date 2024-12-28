export default function handler(req, res) {
    if (req.method === "GET") {
      const products = [
        { id: 1, name: "Product 1", price: 10.0, description: "This is product 1" },
        { id: 2, name: "Product 2", price: 20.0, description: "This is product 2" },
        { id: 3, name: "Product 3", price: 30.0, description: "This is product 3" },
      ];
      res.status(200).json(products);
    } else {
      res.status(400).json({ error: "Bad Request: Method not allowed" });
    }
  }
  
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

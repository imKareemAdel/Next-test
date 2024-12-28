export async function getStaticPaths() {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const products = [
    { id: 1, name: "Product 1", price: 10.0, description: "This is product 1" },
    { id: 2, name: "Product 2", price: 20.0, description: "This is product 2" },
    { id: 3, name: "Product 3", price: 30.0, description: "This is product 3" },
  ];
  const product = products.find((p) => p.id.toString() === params.id);
  return { props: { product } };
}

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

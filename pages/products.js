export async function getServerSideProps() {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];
    return { props: { products } };
  }
  
  export default function Products({ products }) {
    return (
      <div>
        <h1>Our Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
export async function getStaticProps() {
    const products = [
      { id: 1, name: "Updated Product 1" },
      { id: 2, name: "Updated Product 2" },
    ];
    return {
      props: { products },
      revalidate: 10, // تحديث البيانات كل 10 ثوانٍ
    };
  }
  
  export default function UpdatedProducts({ products }) {
    return (
      <div>
        <h1>Updated Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
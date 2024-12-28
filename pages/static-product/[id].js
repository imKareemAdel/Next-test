export async function getStaticPaths() {
    const paths = [
      { params: { id: "1" } },
      { params: { id: "2" } },
    ];
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const product = { id: params.id, name: `Static Product ${params.id}` };
    return { props: { product } };
  }
  
  export default function StaticProduct({ product }) {
    return (
      <div>
        <h1>{product.name}</h1>
        <p>Product ID: {product.id}</p>
      </div>
    );
  }
  
import Products from '@/components/products/page';
import axios from 'axios';

export default async function LandingPage() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    return (
      <div>
        <Products products={products} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Failed to load products.</div>; 
  }
}

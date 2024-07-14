import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";


export default function Home() {
  return (
    <div>
      <ProductList productTitle="Best Selling"/>
      <ProductList productTitle="Spices"/>
        <Footer/>
    </div>
  );
}

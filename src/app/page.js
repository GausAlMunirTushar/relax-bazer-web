import ActionMenuList from "@/components/ActionMenuList";
import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";


export default function Home() {
  return (
    <div>
      <Header/>
      <main className="bg-gray-50 py-10">
          <ActionMenuList/>
          <CategoryList categoryTitle="Product Category"/>
          <ProductList productTitle="Daily Bazar"/>
          <ProductList productTitle="Monthly Bazar"/>
          <ProductList productTitle="Best Selling"/>
          <ProductList productTitle="Spices"/>
      </main>
        <Footer/>
    </div>
  );
}

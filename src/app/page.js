import ActionMenuList from "@/components/ActionMenuList";
import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";


import ProductList from "@/components/ProductList";


export default function Home() {
  return (
    <div className="bg-gray-50 py-10">
          <Hero/>
          <ActionMenuList/>
          <CategoryList categoryTitle="Product Category"/>
          <ProductList productTitle="Daily Bazar"/>
          <ProductList productTitle="Monthly Bazar"/>
          <ProductList productTitle="Best Selling"/>
          <ProductList productTitle="Spices"/>
    </div>
  );
}

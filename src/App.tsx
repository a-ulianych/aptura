import { SimpleHeader } from "./components/SimpleHeader";
import { HeadlineSection } from "./components/HeadlineSection";
import { PainPointsSection } from "./components/PainPointsSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { ProductSection } from "./components/ProductSection";
import { CTASection } from "./components/CTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />
      <main>
        <HeadlineSection />
        <PainPointsSection />
        <SolutionsSection />
        <ProductSection />
        <CTASection />
      </main>
    </div>
  );
}
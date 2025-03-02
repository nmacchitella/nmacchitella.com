{/* Removing unused Image import */}
import Link from 'next/link';

function ProductSection() {
  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="product__title">Product Leader</h1>
            <p className="product__text">
              Skilled in combining both creative ideas and quantitative approaches, since 2017 Nicola has been working with world leading tech companies researching new trends, sizing market opportunities, forecasting returns, directing cross-functional projects, prioritizing strategies, defining MVPs, extracting directional insights from data analysis and bringing products from ideation to market. (
              <Link 
                href="https://www.linkedin.com/in/nicola-macchitella/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
              )
            </p>
            <div className="text-center">
              {/* Using regular img tag as Image component might be causing issues */}
              <img 
                className="product__img" 
                src="/img/logos.png" 
                alt="Nicola Macchitella" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main>
        <ProductSection />
      </main>
    </div>
  );
}
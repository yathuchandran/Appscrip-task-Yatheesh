"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaChevronDown } from "react-icons/fa";
import Card from "../shared/card";
import styles from "./styles/products.module.css";

interface Product {
  id: number;
  title: string;
  image: string;
}

interface AccordionProps {
  title: string;
  subTitle: string;
  isOpen: boolean;
  handleToggle: () => void;
  children: React.ReactNode;
}

const Accordion = ({ title, subTitle, isOpen, handleToggle, children }: AccordionProps) => (
  <div className={styles.accordion}>
    <div className={styles.accordionHeader} onClick={handleToggle}>
      <p className={styles.accordionTitle}>{title}</p>
      <FaAngleDown className={isOpen ? styles.rotateIcon : ""} />
    </div>
    <p className={styles.accordionSubTitle}>{subTitle}</p>
    {isOpen && <div className={styles.accordionContent}>{children}</div>}
  </div>
);

const Products = ({ products }: { products: Product[] }) => {
  const [localProducts, setLocalProducts] = useState<Product[]>(products);
  const [hideFilter, setHideFilter] = useState(true);
  const [dropdownToggles, setDropdownToggles] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  
  const handleHide = () => {
    setHideFilter(!hideFilter);
  };

  const handleToggle = (dropdownName: keyof typeof dropdownToggles) => {
    setDropdownToggles((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };



  return (
    <>
      <Head>
        <title>{`Shop Products - ${localProducts.length} Items Available`}</title>
        <meta name="description" content="Explore our diverse range of products tailored to suit your style and needs. Shop now!" />
        <meta name="keywords" content="products, shopping, ecommerce, online store, fashion" />
        <meta property="og:title" content={`Shop Products - ${localProducts.length} Items Available`} />
        <meta property="og:description" content="Explore our diverse range of products tailored to suit your style and needs. Shop now!" />
        <meta property="og:image" content={localProducts.length > 0 ? localProducts[0].image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} /> 
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />

        <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
     __html: JSON.stringify({
       "@context": "https://schema.org",
       "@type": "Product",
       name: "Product Name",
       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
       description: "This is a detailed product description.",
       sku: "123456",
       brand: {
         "@type": "Brand",
         name: "Brand Name",
       },
       offers: {
         "@type": "Offer",
         priceCurrency: "USD",
         price: "29.99",
         availability: "https://schema.org/InStock",
         url: "https://fashionstore.com/product-page",
       },
       aggregateRating: {
         "@type": "AggregateRating",
         ratingValue: "4.5",
         reviewCount: "89"
       }
     }),
   }}
 />

      </Head>
      <div className={styles.container}>
        <hr className={styles.separator} />
        <div className={styles.content}>
          <div className={styles.showFilter} >

            <h3 className={styles.productCount}>{`${localProducts.length} ITEMS`}</h3>
            {hideFilter ? (
              <>
                <FaAngleRight className={styles.icon} />
                <p onClick={handleHide} className={styles.filterButton}>
                  SHOW FILTER
                </p>
              </>
            ) : (
              <>
                <FaAngleLeft className={styles.icon} />
                <p onClick={handleHide} className={styles.filterButton}>
                  HIDE FILTER
                </p>
              </>
            )}
          </div>
          <div className={styles.showFilterMobile} >

            <h3 className={styles.productCount}>{`${localProducts.length} ITEMS`}</h3>
              <>
                <FaAngleRight className={styles.icon} />
                <p  className={styles.filterButtons}>
                   FILTER
                </p>
              </>
          </div>
          <div>
          <div className={styles.dropdown}>
      <div className={styles.dropdownSelected} onClick={handleDropdownClick}>
        RECOMMENDED
        <FaChevronDown fontSize={16} />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <div className={`${styles.dropdownItem} ${styles.selected}`}>
            <span className={styles.checkmark}>✔</span> RECOMMENDED
          </div>
          <div className={styles.dropdownItem}>NEWEST FIRST</div>
          <div className={styles.dropdownItem}>POPULAR</div>
          <div className={styles.dropdownItem}>PRICE: HIGH TO LOW</div>
          <div className={styles.dropdownItem}>PRICE: LOW TO HIGH</div>
        </div>
      )}
    </div>
          </div>
        </div>
      </div>
      <hr className={styles.separator} />
      <div className={styles.container}>
        <div className={styles.content}>
          {!hideFilter && (
            <div className={styles.filterSidebar}>
              <div className={styles.filterSection}>
                <input type="checkbox" id="customizable" className={styles.checkbox} />
                <label htmlFor="customizable" className={styles.filterLabel}>CUSTOMIZABLE</label>
              </div>
              <hr />
              <Accordion
                title="IDEAL FOR"
                subTitle="All"
                isOpen={dropdownToggles.idealFor}
                handleToggle={() => handleToggle("idealFor")}
              >
                <ul className={styles.filterList}>
                  <li><input type="checkbox" /> Men</li>
                  <li><input type="checkbox" /> Women</li>
                  <li><input type="checkbox" /> Baby & Kids</li>
                </ul>
              </Accordion>
              <hr />
              <Accordion
                title="OCCASION"
                subTitle="All"
                isOpen={dropdownToggles.occasion}
                handleToggle={() => handleToggle("occasion")}
              >
                <ul className={styles.filterList}>
                  <li><input type="checkbox" /> Casual</li>
                  <li><input type="checkbox" /> Formal</li>
                  <li><input type="checkbox" /> Party</li>
                </ul>
              </Accordion>
              <hr />
              <Accordion
                title="WORK"
                subTitle="All"
                isOpen={dropdownToggles.work}
                handleToggle={() => handleToggle("work")}
              >
                <ul className={styles.filterList}>
                  <li><input type="checkbox" /> Office</li>
                  <li><input type="checkbox" /> Remote</li>
                </ul>
              </Accordion>
              <hr />
              <Accordion
                title="FABRIC"
                subTitle="All"
                isOpen={dropdownToggles.fabric}
                handleToggle={() => handleToggle("fabric")}
              >
                <ul className={styles.filterList}>
                  <li><input type="checkbox" /> Cotton</li>
                  <li><input type="checkbox" /> Silk</li>
                </ul>
              </Accordion>
              <hr />
              <Accordion
                title="SEGMENT"
                subTitle="All"
                isOpen={dropdownToggles.segment}
                handleToggle={() => handleToggle("segment")}
              >
                <ul className={styles.filterList}>
                  <li><input type="checkbox" /> Men</li>
                  <li><input type="checkbox" /> Women</li>
                </ul>
              </Accordion>
            </div>
          )}
          <div className={hideFilter ? styles.productGridFourColumns : styles.productGridThreeColumns}>
            {localProducts.map((product) => (
              <div className={styles.productCard} key={product.id}>
                <Card data={product} />
              </div>
            ))}
          </div>  
        </div>
      </div>
    </>
  );
};

export default Products;

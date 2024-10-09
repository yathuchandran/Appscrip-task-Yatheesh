"use client";

import BannerImage from "@/app/public/images/Banner-Image.png";
import LogoImage from "@/app/public/images/Logo-Image.png";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { CiMenuBurger, CiUser } from "react-icons/ci";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import styles from "./styles/header.module.css";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigatorIconsMobile = [
    <FaRegHeart key="heart" fontSize={24} aria-label="Wishlist" />,
    <RiSearchLine key="search" fontSize={24} aria-label="Search" />,
    <BsHandbag key="bag" fontSize={24} aria-label="Shopping Bag" />,
  ];

  const navigatorIconsDesktop = [
    ...navigatorIconsMobile,
    <CiUser key="user" fontSize={24} aria-label="User Profile" />,
    <div style={{ display: 'flex', alignItems: 'center' }} key="language">
    <p style={{ marginRight: '4px', fontSize: '24px' }}>ENG</p>
    <FaChevronDown fontSize={16} />
  </div>
  ];

  const renderBannerTitles = () => (
    <>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div className={styles.banerloreum}> 
          <Image
              src={BannerImage}
              alt="Promotional Banner"
              width={22}
              height={22}
            />
              <h6 key={index} className={styles.bannerTitle} >
            
            Lorem ipsum dolor
          </h6>
          </div>
        
        ))} 
    </>
  );

  return (
    <>
      
      <Head>
        <title>Discover Amazing Products - Fashion Store</title>
        <meta
          name="description"
          content="Explore a wide range of products including shirts, jeans, jackets, and accessories. Shop now for the best deals!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Discover Amazing Products - Fashion Store" />
        <meta
          property="og:description"
          content="Shop for high-quality products at affordable prices. Get the best deals on a variety of items."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/banner-image.png" />
        <meta property="og:url" content="https://fashion-store.com" />
        <link rel="canonical" href="https://fashion-store.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Fashion Store",
              url: "https://fashionstore.com",
              logo: "https://fashionstore.com/logo.png",
              description: "Go-to fashion store for the latest trends.",
            }),
          }}
        />
      </Head>

      
      <header className={styles.headerContainer}>
        <div className={styles.bannerSection}>{renderBannerTitles()}</div>

        <div className={styles.logoSection}>
          <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <CiMenuBurger size={25} />
          </div>
          <Image src={LogoImage} alt="fashion store Logo" width={27} height={27} />
          </div>
          
          <h1 className={styles.logoText}>LOGO</h1>
          <div className={styles.iconContainer}>
            {isMobile ? navigatorIconsMobile : navigatorIconsDesktop}
          </div>
        </div>

        <header className={styles.header}>
          {menuOpen && (
            <nav className={styles.navigationMobile}>
              {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item) => (
                <h2 key={item} className={styles.navItem}>
                  {item}
                </h2>
              ))}
            </nav>
          )}

          {!menuOpen && (
            <nav className={styles.navigation}>
              {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item) => (
                <h2 key={item} className={styles.navItem}>
                  {item}
                </h2>
              ))}
            </nav>
          )}
        </header>

        <hr />

        <div className={styles.discoverSection}>
          <h1 className={styles.discoverTitle}>Discover our products</h1>
          <h4 className={styles.discoverSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut
            elementum dolor. dolor.
          </h4>
        </div>
      </header>
    </>
  );
};

export default Header;

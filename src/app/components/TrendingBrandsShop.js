"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../shop/StyleShop.module.css";

export default function TrendingBrands() {
  const [TopBrands, setTopBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setTopBrands([]);
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <section className={styles.featuredCreators}>
      <div>
        <h3 className={styles.sectionTitleShop}>Trending Brands</h3>
        <div className={styles.fText}>
          {TopBrands.length < 1 ? (
            <div className={styles.fImg}>
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className={styles}>
                  <div className={styles.skeletonImage}></div>
                  <div className={styles.skeletonText}></div>
                </div>
              ))}
            </div>
          ) : (
            <a className={styles.viewLink} href="#">
              view all{" "}
              <span>
                <Image src="/images/arrow.svg" alt="" width={24} height={24} />
              </span>
            </a>
          )}
        </div>
        <div className={styles.fImg}>
          {TopBrands.map((creator, index) => (
            <div key={index} className={styles.fImg1}>
              <Image
                src={creator.image}
                alt={creator.name}
                width={100}
                height={100}
              />
              <span className={styles.imgText}>{creator.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

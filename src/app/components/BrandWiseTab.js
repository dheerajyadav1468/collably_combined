'use client'

import styles from '../CreatorShop/styles.creatorShop.module.css'

export default function BrandWiseTab() {
  return (
    <div className={styles.tabContent}>
      <p className={styles.subtitle}>Check out which brands are working for you</p>
      
      <div className={styles.chartContainer}>
        <div className={styles.donutChart}>
          <div className={styles.donutCenter}>
            <span className={styles.amount}>₹0</span>
          </div>
        </div>
      </div>
      
      <p className={styles.emptyMessage}>
        * You don't have any commissions in the selected time period. Share Collablys and earn
      </p>
    </div>
  )
}


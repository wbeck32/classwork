import React from 'react';
import styles from './A.css';

export default function A() {
  return (
    <div className={styles.label}>
      <p>Component A</p>
      <button>Yo!</button>
    </div>
  );
}
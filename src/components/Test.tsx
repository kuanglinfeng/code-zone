import React from 'react';
import { Button } from 'antd';
import styles from './style.less';


console.log('styles', styles);

const Test: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button>Test</Button>
    </div>
  );
}

export default Test;
import { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

const Data = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setData({
        title: 'Welcome to Manicodes',
        description: 'Follow our page for more informational content related to tech.',
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed odio aspernatur sit incidunt omnis fugiat sunt, cumque doloribus facilis minima a impedit ex similique, nemo deleniti! Numquam adipisci velit recusandae.'
      });
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>{data.about}</p>
        </div>
      )}
    </div>
  );
};

export default Data;

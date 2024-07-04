import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => {
  return (
    <div>
      <Skeleton height={30} />
      <Skeleton height={40} 
        style={{ margin: '1rem 0' }} />
      <Skeleton count={5} />
    </div>
  );
};

export default SkeletonLoader;

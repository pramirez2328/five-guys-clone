import '../styles/loading.css';

const Loading = () => {
  return (
    <div className='loading-container'>
      <div className='loading-spinner'></div>
      <p>Finding your location...</p>
    </div>
  );
};

export default Loading;

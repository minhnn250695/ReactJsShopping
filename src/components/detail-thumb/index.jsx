function DetailsThumb(props) {
  const { images, tab } = props;
  return (
    <div className="thumb">
      {images.map((img, index) => (
        <img src={img} alt="product" key={index} onClick={() => tab(index)} />
      ))}
    </div>
  );
}

export default DetailsThumb;

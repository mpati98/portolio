import ImageGolfNews from "../../assets/golfNews.png"

const ProductCard = ({ name, description, image, link }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={image?image:ImageGolfNews}
        className={{ height: "200px", width: "360px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News will be update lated."}
        </p>
        <a href={link} className="btn btn-primary">
          View more...
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

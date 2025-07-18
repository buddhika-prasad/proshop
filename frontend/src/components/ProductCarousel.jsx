import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// Static product data
const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    price: 89.99,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    price: 599.99,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    price: 929.99,
  },
];

const ProductCarousel = () => {
  return (
    <div
      className="mx-auto mb-4"
      style={{
        maxWidth: "720px",
        background: "linear-gradient(to right, #f8f9fa, #ffffff)",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Carousel
        pause="hover"
        indicators={false}
        prevIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
            style={{
              filter: "invert(1)",
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        }
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
            style={{
              filter: "invert(1)",
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        }
      >
        {products.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/`}>
              <Image
                src={product.image}
                alt={product.name}
                fluid
                className="d-block w-100"
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <Carousel.Caption
                className="p-2"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  bottom: 0,
                  width: "100%",
                  borderTop: "1px solid #333",
                }}
              >
                <h6 className="text-light m-0">
                  {product.name}{" "}
                  <span className="text-warning">(${product.price})</span>
                </h6>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

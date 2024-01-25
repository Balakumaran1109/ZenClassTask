import { useContext } from "react";
import { qtyContext } from "./CartContext";
import { useEffect } from "react";

function CartPage() {
  const mobileDetails = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      subTotal: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      subTotal: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      quantity: 1,
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      subTotal: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      quantity: 1,
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      subTotal: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      quantity: 1,
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      subTotal: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      quantity: 1,
    },
  ];

  const { cartItems, setCartItems } = useContext(qtyContext);

  useEffect(() => {
    setCartItems(mobileDetails);
  }, []);

  const handleIncrement = (card_id) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        card_id === item.id
          ? {
              ...item,
              quantity: item.quantity + (item.quantity < item.stock ? 1 : 0),
              subTotal:
                item.quantity < item.stock
                  ? item.subTotal + item.price
                  : item.subTotal,
            }
          : item
      )
    );
  };

  const handleDecrement = (card_id) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        card_id === item.id
          ? {
              ...item,
              quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
              subTotal:
                item.quantity > 1 ? item.subTotal - item.price : item.subTotal,
            }
          : item
      )
    );
  };

  return (
    <div>
      {cartItems.map((value) => (
        <div className="container" key={value.id}>
          <div className="card p-4 bg-light mt-5 mb-5">
            <div className="card-header bg-light">
              <div className="row">
                <div className="col">
                  <img
                    src={value.images}
                    className="img-fluid rounded"
                    alt="..."
                  ></img>
                </div>

                <div className="col">
                  <h4 className="card-title">{value.title}</h4>
                  <p className="card-text">{value.description}</p>
                  <p className="card-text">
                    <b>Rating : </b>
                    {value.rating}
                  </p>
                  <p className="card-text">
                    <b>Stock : </b> {value.stock}
                  </p>
                </div>

                <div className="col text-center">
                  <div>
                    <p>Price : {value.price}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm m-1"
                      onClick={() => handleIncrement(value.id)}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm m-1"
                      onClick={() => handleDecrement(value.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <br></br>
                  <div>
                    <h6>Quantity</h6>
                    <p>{value.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <p>SUBTOTAL</p>
                  <p>DISCOUNT ({value.discountPercentage}%)</p>
                </div>
                <div className="col text-center">
                  <p>{value.subTotal}</p>
                  <p>
                    -{" "}
                    {(
                      (value.subTotal / 100) *
                      value.discountPercentage
                    ).toFixed(0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="row">
                <div className="col-8">
                  <p>
                    <b>TOTAL</b>
                  </p>
                </div>
                <div className="col text-center">
                  <p>
                    <b>
                      {(
                        value.subTotal -
                        (value.subTotal / 100) * value.discountPercentage
                      ).toFixed(0)}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;

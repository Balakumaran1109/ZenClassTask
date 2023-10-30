import React, { useState } from "react";

// create a functional component to display the card details
function CartList({ name, price, handleCartValue, click }) {
  return (
    <>
      <div className="col mb-5">
        <div id="card " className="card h-100">
          <div>
            {name === "Special Item" || name === "Sale Item" ? (
              <div className="badge bg-dark text-white position-absolute">Sale</div>
            ) : (
              <div></div>
            )}
          </div>
          <img
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body p-4 text-center">
            <h5 className="card-title">{name}</h5>

{/* add if condition to insert the elements in needed card */}
            <div>
              {name === "Special Item" || name === "Popular Item" ? (
                <div>
                  <span className="bi-star-fill text-warning"></span>
                  <span className="bi-star-fill text-warning"></span>
                  <span className="bi-star-fill text-warning"></span>
                  <span className="bi-star-fill text-warning"></span>
                  <span className="bi-star-fill text-warning"></span>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <p className="card-text">{price}</p>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {name === "Fancy Product" ? (
                <button type="button" className="btn btn-white btn-outline-dark">
                  View options
                </button>
              ) : handleCartValue ? (
                <button
                  onClick={click}
                  type="button"
                  className="btn btn-white btn-outline-dark"
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={click}
                  type="button"
                  className="btn btn-white btn-outline-dark"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// create another functional component to display shopping cart page
function Cart() {
  const [cartValue, setCartValue] = useState([]);

  const buttonHandler = (itemName) => {
    if (cartValue.includes(itemName)) {
      setCartValue(cartValue.filter((e) => e !== itemName));
    } else {
      setCartValue([...cartValue, itemName]);
    }
  };

  const totalCount = cartValue.length;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#">
            Shopping Cart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <span className="navbar-text">
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {totalCount}
                  </span>
                </button>
              </form>
            </span>
          </div>
        </div>
      </nav>
      <header>
        <div className="bg-dark">
          <div className="text-white text-center p-5">
            <h1>Shop in Style</h1>
            <h6 className="text-secondary">With this shop homepage Template</h6>
          </div>
        </div>
      </header>

{/* in section import the cartlist component */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <CartList
              name="Fancy Product"
              price="$40.00 - $80.00"
              click={() => buttonHandler("product 1")}
              handleCartValue={cartValue.includes("product 1")}
            />

            <CartList
              name="Special Item"
              price="$20.00 $18.00"
              click={() => buttonHandler("product 2")}
              handleCartValue={cartValue.includes("product 2")}
            />

            <CartList
              name="Sale Item"
              price="$50.00 $25.00"
              click={() => buttonHandler("product 3")}
              handleCartValue={cartValue.includes("product 3")}
            />

            <CartList
              className="d-inline"
              name="Popular Item"
              price="$40.00"
              click={() => buttonHandler("product 4")}
              handleCartValue={cartValue.includes("product 4")}
            />

            <CartList
              name="Sale Item"
              price="$50.00 $25.00"
              click={() => buttonHandler("product 5")}
              handleCartValue={cartValue.includes("product 5")}
            />

            <CartList
              name="Fancy Product"
              price="$120.00 - $280.00"
              click={() => buttonHandler("product 6")}
              handleCartValue={cartValue.includes("product 6")}
            />

            <CartList
              name="Special Item"
              price="$20.00 $18.00"
              click={() => buttonHandler("product 7")}
              handleCartValue={cartValue.includes("product 7")}
            />

            <CartList
              name="Popular Item"
              price="$40.00"
              click={() => buttonHandler("product 8")}
              handleCartValue={cartValue.includes("product 8")}
            />
          </div>
        </div>
      </section>

      <footer className="bg-dark py-5">
        <div className="container">
          <p className="text-white text-center">
            Copyright © Your Website 2023
          </p>
        </div>
      </footer>
    </>
  );
}

export default Cart;

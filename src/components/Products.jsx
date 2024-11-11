import data from "./data/coffeeData.json";
import './styles/Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Products() {
  return (
    <div className="container">
      <div className="row">
        {data.map((coffee) => (
          <div key={coffee.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={coffee.image} className="card-img-top img-fixed-height" alt={coffee.name} />
              <div className="card-body">
                <h5 className="card-title">{coffee.name}</h5>
                <p className="card-text">{coffee.description}</p> 
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-price">{coffee.price}$</p>
                  <button className="btn btn-primary cart-button">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

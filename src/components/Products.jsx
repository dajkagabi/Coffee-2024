
import data from "./data/coffeeData.json";

function Products() {
  return (
    <div className="container">
      <div className="row">
        {data.map((coffee) => (
          <div key={coffee.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={coffee.image} className="card-img-top" alt={coffee.name} />
              <div className="card-body">
                <h5 className="card-title">{coffee.name}</h5>
                <p className="card-text">{coffee.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

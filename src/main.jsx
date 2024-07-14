import ReactDOM from 'react-dom/client'
import './index.css'
import jsonData from "./components/data.json"
import PriceCard from "./components/PriceCard.jsx";
const data = jsonData;
console.log(data);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="price-root">
    {data.map(obj => {
      return <PriceCard
        key={obj.type}
        type={obj.type}
        price={obj.price}
        features={obj.features}
      />
    })}
  </div>
)

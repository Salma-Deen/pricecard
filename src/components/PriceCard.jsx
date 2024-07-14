/* eslint-disable react/prop-types */
const PriceCard = ({ type, price, features }) => {
  return (
    <div className="price">
      <h6 className="text-muted" style={{ textAlign: "center", fontSize: 12 }}>{type}</h6>
      <h6 className="month"><b>${price}/month</b></h6>
      <hr></hr>
      {features.map((feature) => {
        if (feature.available) {
          return <h6 style={{ fontSize: 13 }} key={feature.name}><i className="fa fa-check" aria-hidden="true"></i>  {feature.name}<br /><br /></h6>
        }
        return <h6 style={{ fontSize: 13 }} key={feature.name} className="text-muted"><i className="fa fa-times" aria-hidden="true"></i>  {feature.name}  <br /><br /></h6>
      })}
      <button type="button" className="button">BUTTON</button>
    </div>
  );
}
export default PriceCard;

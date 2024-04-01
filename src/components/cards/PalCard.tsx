// @ts-expect-error - TODO: fix types
const PalCard = ({ name, imgSource, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSource} alt="" />
      <div className="pal-name__container">
        <span className="pal-name">{name}</span>
      </div>
    </div>
  );
};

export default PalCard;

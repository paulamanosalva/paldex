/* eslint-disable @typescript-eslint/no-explicit-any */
import cooling from "../../assets/images/work/cooling.png";
import farming from "../../assets/images/work/farming.png";
import gathering from "../../assets/images/work/gathering.png";
import generating_electricity from "../../assets/images/work/generating_electricity.png";
import handiwork from "../../assets/images/work/handiwork.png";
import kindling from "../../assets/images/work/kindling.png";
import lumbering from "../../assets/images/work/lumbering.png";
import medicine_production from "../../assets/images/work/medicine_production.png";
import mining from "../../assets/images/work/mining.png";
import planting from "../../assets/images/work/planting.png";
import transporting from "../../assets/images/work/transporting.png";
import watering from "../../assets/images/work/watering.png";

type modalArgs = {
  name: string;
  imgSource: string;
  description: string;
  onClose: any;
  initialSkillName: string;
  initialSkillDescription: string;
  stats: any;
  suitability: any;
};

const PalModal = ({
  name,
  imgSource,
  description,
  onClose,
  initialSkillName,
  initialSkillDescription,
  stats,
  suitability,
}: modalArgs) => {
  const palWorkImages = {
    cooling,
    farming,
    gathering,
    generating_electricity,
    handiwork,
    kindling,
    lumbering,
    medicine_production,
    mining,
    planting,
    transporting,
    watering,
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="images-container">
          <img src={imgSource} alt={name} />
          <div className="work-container">
            {suitability &&
              suitability.map((item: any) => (
                // @ts-expect-error - TODO: define types
                <img className="work-icons" src={palWorkImages[item.type]} />
              ))}
          </div>
        </div>
        <div className="text-container">
          <span className="modal__pal-name">{name.toUpperCase()}</span>
          <p className="modal__pal-description">{description}</p>
          <span className="modal__skill">Initial skill</span>
          <p className="modal__skill-description">
            {/* All this code is only to capitalize the first letter and replace 
            the underscores with blank spaces,  since the skill name was in snake case*/}
            {initialSkillName.charAt(0).toUpperCase() +
              initialSkillName.slice(1).replace(/_/g, " ")}
            : {initialSkillDescription}
          </p>
          <div className="stats-container">
            <span className="modal__stats">Stats</span>
            <ul>
              <li>hp: {stats.hp}</li>
              <li>attack melee: {stats.attack.melee}</li>
              <li>attack ranged: {stats.attack.ranged}</li>
              <li>defense: {stats.defense}</li>
              <li>stamina: {stats.stamina}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalModal;

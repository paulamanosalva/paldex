import { useState } from "react";
import SearchInput from "./SearchInput";
import PalCard from "./PalCard";
import PalModal from "./PalModal";
import data from "../../assets/data/pals.json";

import "./cards.scss";

const PalCardsContainer = () => {
  const [selectedPal, setSelectedPal] = useState(undefined);
  const [searchedPal, setSearchedPal] = useState("");
  // @ts-expect-error - TODO: fix types
  const openModal = (id) => {
    // @ts-expect-error - TODO: fix types
    setSelectedPal(parseInt(id) - 1);
  };

  const closeModal = () => {
    setSelectedPal(undefined);
  };
  // @ts-expect-error - TODO: fix types
  const handleSearch = (value) => {
    setSelectedPal(undefined);
    setSearchedPal(value);
  };

  return (
    <div className="cards-section-container">
      <div className="input-container">
        <SearchInput onChange={handleSearch} />
      </div>
      {!searchedPal && (
        <div className="cards-container">
          {data.map((pal) => {
            return (
              <PalCard
                key={pal.id}
                name={pal.name}
                imgSource={pal.imageWiki}
                onClick={() => openModal(pal.id)}
              />
            );
          })}
        </div>
      )}
      {searchedPal && (
        <div className="cards-container">
          {data
            .filter((pal) =>
              pal.name.toLowerCase().includes(searchedPal.toLowerCase())
            )
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((filteredPal) => (
              <PalCard
                key={filteredPal.id}
                name={filteredPal.name}
                imgSource={filteredPal.imageWiki}
                onClick={() => openModal(filteredPal.id)}
              />
            ))}
        </div>
      )}
      {selectedPal !== undefined && (
        <div className="modal-container">
          <PalModal
            name={data[selectedPal].name}
            imgSource={data[selectedPal].imageWiki}
            description={data[selectedPal].description}
            initialSkillName={data[selectedPal].skills[0].name}
            initialSkillDescription={data[selectedPal].skills[0].description}
            suitability={data[selectedPal].suitability}
            stats={data[selectedPal].stats}
            onClose={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default PalCardsContainer;

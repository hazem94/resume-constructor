import { ROUTE_NAMES } from "constants/routeNames";
import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { AddEditModal } from "./AddEditModal";
import AddExperienceForm from "./AddExperience";
import WithTrans from "./WithTrans";

// #####################   Globals    ######################

// ##################   Main Component    ##################
const BackgroundSectionHeader = ({
  sectionIcon,
  sectionName,
  sectionAddHeader,
  onSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <Icon name={sectionIcon} size="big" className="mr-3" />
      <span className="text-secondary">
        {<WithTrans keyword={sectionName} />}
      </span>
      {/* If edit profile show `add` button else, hide it */}
      {window.location.pathname !== ROUTE_NAMES.editProfile ? (
        <></>
      ) : (
        <span className="ml-5">
          <Button icon size="mini" color="teal" onClick={toggle}>
            <Icon name="plus" />
          </Button>
        </span>
      )}
      <AddEditModal
        isOpen={isOpen}
        toggle={toggle}
        header={<WithTrans keyword={sectionAddHeader} />}
        onClose={() => setIsOpen(false)}
      >
        <AddExperienceForm
          onSubmit={onSubmit}
          closeOnSubmit={() => setIsOpen(false)}
        />
      </AddEditModal>
    </div>
  );
};

export default BackgroundSectionHeader;

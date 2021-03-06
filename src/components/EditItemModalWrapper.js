import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { AddEditModal } from "./AddEditModal";
import WithTrans from "./WithTrans";

/**
 * #################   Main Component    #################
 * @param {object} Props
 * @param {object} Props.item
 * @param {Function} Props.setItemBeingEdited
 * @param {Function} Props.handleEditItem
 * @param {React.ElementType || undefined} Props.EditItemForm
 */
const EditItemModalWrapper = ({
  item,
  setItemBeingEdited,
  handleEditItem,
  EditItemForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setItemBeingEdited(item);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button icon="edit outline" color="vk" onClick={toggle}></Button>
      <AddEditModal
        isOpen={isOpen}
        toggle={toggle}
        header={<WithTrans keyword="Edit" />}
        onClose={() => setIsOpen(false)}
      >
        <EditItemForm
          onSubmit={handleEditItem}
          closeOnSubmit={() => setIsOpen(false)}
        />
      </AddEditModal>
    </div>
  );
};

export default EditItemModalWrapper;

EditItemModalWrapper.propTypes = {
  item: PropTypes.object.isRequired,
  setItemBeingEdited: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func,
  EditItemForm: PropTypes.object,
};

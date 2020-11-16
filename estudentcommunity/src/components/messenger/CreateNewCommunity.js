import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

const CreateNewCommunity = ({
  isOpen,
  toggle,
  communityName,
  handleChange,
  addCommunity,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Create new comunity</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="community">Community Name</Label>
          <Input
            type="text"
            name="community"
            id="community"
            placeholder="community"
            value={communityName}
            onChange={handleChange}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" onClick={toggle}>
          Cancel
        </Button>
        <Button size="sm" color="info" onClick={addCommunity}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateNewCommunity;

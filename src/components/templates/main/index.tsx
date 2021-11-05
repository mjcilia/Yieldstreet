import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import YForm from "../../ui/organisms/form";
import { ModalWrapper, TemplateWrapper } from "./style";

const MainTemplate = (): JSX.Element => {
  return (
    <TemplateWrapper>
      <Modal open>
        <Fade in>
          <ModalWrapper>
            <YForm />
          </ModalWrapper>
        </Fade>
      </Modal>
    </TemplateWrapper>
  );
};

export default MainTemplate;

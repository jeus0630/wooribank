import styled from "@emotion/styled";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const style = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleModalControl = () => setModalOpen(!modalOpen);
  const handleClose = () => navigate("/");

  return (
    <HomeContainer onClick={handleModalControl}>
      <Modal
        open={modalOpen}
        onClose={handleModalControl}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            아직 준비중 입니다!
          </Typography>
          <Button
            onClick={handleClose}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            처음으로 돌아가기
          </Button>
        </Box>
      </Modal>

      <ImageContainer>
        <img
          src="/images/eaeda9f5-67c5-413f-ace4-4e2c0a3c4fdc.png"
          alt="home"
        />
      </ImageContainer>
    </HomeContainer>
  );
}

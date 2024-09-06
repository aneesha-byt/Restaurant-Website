import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Box, Container } from "@mui/system";

import fbIcon from "../../assets-2/facebook.png";
import twitterIcon from "../../assets-2/twitter.png";
import instagramIcon from "../../assets-2/instagram.png";

const Footer = () => {
  const Customcontainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "coloumn",
      textAlign: "center",
    },
  }));
  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: " #66B2FF",
    },
  }));
  const nav_titles = [
    {
      path: "/",
      display: "Guides",
    },
    {
      path: "/",
      display: "Services",
    },

    {
      path: "/",
      display: "Contact Us",
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: "#FFF6B2" }}>
      <Customcontainer> 
      {/* //for maintain responsive     */}
      
    
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Featured
          </Typography>
          <FooterLink>
            {nav_titles.map((item, index) => (
              <div key={index}>{item.display}</div>
            ))}
          </FooterLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Overview
          </Typography>
          <FooterLink>Location</FooterLink>
          <br />
          <FooterLink>Partnership</FooterLink>
          <br />
          <FooterLink>Terms of use & privacy policies</FooterLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Keep in touch our special media pages.
          </Typography>

          <IconBox>
            <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
            <img
              src={twitterIcon}
              alt="twitterIcon"
              style={{ cursor: "pointer" }}
            />
            <img
              src={instagramIcon}
              alt="linkedinIcon"
              style={{ cursor: "pointer" }}
            />
          </IconBox>
        </Box>
      </Customcontainer>
    </Box>
  );
  
};

export default Footer;

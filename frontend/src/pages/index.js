import Head from "next/head";
import { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { SingleDao } from "../components/dashboard/single-dao";
import { DaoList } from "../components/dashboard/dao-list";
import { DashboardLayout } from "../components/dashboard-layout";

const Dashboard = () => {
  const [ownerAddress, setOwnerAddress] = useState();
  useEffect(async () => {
    const [address] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setOwnerAddress(address);
  });

  const [chosenDaoId, setChosenDaoId] = useState();

  return (
    <>
      <Head>
        <title>Dashboard | DAO Hub</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <DaoList
                chosenDaoId={chosenDaoId}
                onDaoClick={(daoId) => {
                  setChosenDaoId(daoId);
                }}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <SingleDao chosenDaoId={chosenDaoId} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

const handleDaoClick = (daoName) => {
  alert(daoName);
};

export default Dashboard;

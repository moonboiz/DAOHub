import Head from "next/head";
import { useState } from "react";
import { useAsync } from "react-use";
import { ethers } from "ethers";
import { Box, Container, Grid } from "@mui/material";
import { SingleDao } from "../components/dashboard/single-dao";
import { DaoList } from "../components/dashboard/dao-list";
import { DashboardLayout } from "../components/dashboard-layout";
import DAOHubABI from "../contracts/DAOHub.json";
import DAOProxyABI from "../contracts/DAOProxy.json";
import contractAddresses from "../contracts/contract-address.json";

const Dashboard = () => {
  const daoList = useAsync(async () => {
    const { ethereum } = window;

    await ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(ethereum);

    const signer = provider.getSigner();
    const daoHub = new ethers.Contract(
      contractAddresses.DAOHub,
      DAOHubABI.abi,
      signer
    );
    const daoProxies = await daoHub.getDAOProxies();

    const result = await Promise.all(
      daoProxies.map(async (daoProxyAddress) => {
        const daoProxy = new ethers.Contract(
          daoProxyAddress,
          DAOProxyABI.abi,
          signer
        );

        const chainId = await daoProxy.getChainId();
        const name = await daoProxy.getName();
        const logoUri = await daoProxy.getLogoURI();
        const treasuryAddress = await daoProxy.getTreasuryAddress();
        const tokenAddress = await daoProxy.getTokenAddress();
        return { chainId, name, logoUri, treasuryAddress, tokenAddress };
      })
    );
    return result;
  }, []);

  const [chosenDao, setChosenDao] = useState();

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
        {!daoList.loading && (
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <DaoList
                  daoList={daoList.value}
                  chosenDao={chosenDao}
                  onDaoClick={(dao) => {
                    setChosenDao(dao);
                  }}
                  sx={{ height: "100%" }}
                />
              </Grid>
              {chosenDao && (
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <SingleDao
                    chainId={chosenDao.chainId}
                    tokenAddress={chosenDao.tokenAddress}
                    daoLogo={chosenDao.logoUri}
                    daoName={chosenDao.name}
                    daoTreasury={chosenDao.treasury}
                  />
                </Grid>
              )}
            </Grid>
          </Container>
        )}
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;

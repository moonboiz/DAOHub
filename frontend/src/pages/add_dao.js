import Head from "next/head";
import Router from "next/router";
import { useFormik } from "formik";
import { useState } from "react";
import { ethers } from "ethers";
import * as Yup from "yup";
import {
  Box,
  CircularProgress,
  Button,
  Container,
  FormControl,
  InputLabel,
  Grid,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import DAOProxyFactory from "../contracts/DAOProxyFactory.json";
import contractAddresses from "../contracts/contract-address.json";

const AddDao = () => {
  const [isWorking, setIsWorking] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      networkId: 1,
      contractAddress: "",
      logoURI: "",
      treasury: "",
      coinType: 1,
      coin: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("DAO name is required"),
      description: Yup.string()
        .max(255)
        .required("DAO description is required"),
      contractAddress: Yup.string()
        .max(255)
        .required("DAO contract address is required"),
      logoURI: Yup.string(),
      treasuryAddress: Yup.string().max(255),
      coin: Yup.string().max(255).required("NFT/Token address is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsWorking(true);
      const { ethereum } = window;

      await ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.providers.Web3Provider(ethereum);

      const signer = provider.getSigner();
      const daoProxyFactory = new ethers.Contract(
        contractAddresses.DAOProxyFactory,
        DAOProxyFactory.abi,
        signer
      );

      const tx = await daoProxyFactory.newDAOProxy(
        values.networkId,
        values.contractAddress,
        values.name,
        values.description,
        values.logoURI,
        values.coinType,
        values.coin,
        values.treasury
      );

      await tx.wait();

      resetForm();
      setIsWorking(false);
    },
  });

  return (
    <>
      <Head>
        <title>Register a DAO | DAO Hub</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Register a DAO
              </Typography>
            </Box>
            <FormControl fullWidth>
              <InputLabel>Network</InputLabel>
              <Select
                name="networkId"
                value={formik.values.networkId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Network"
              >
                <MenuItem value={1}>Ethereum</MenuItem>
                <MenuItem value={137}>Polygon</MenuItem>
              </Select>
            </FormControl>
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Name"
              margin="normal"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.description && formik.errors.description
              )}
              fullWidth
              helperText={
                formik.touched.description && formik.errors.description
              }
              label="Description"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.logoURI && formik.errors.logoURI)}
              fullWidth
              helperText={formik.touched.logoURI && formik.errors.logoURI}
              label="Logo URI"
              margin="normal"
              name="logoURI"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.logoURI}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.contractAddress && formik.errors.contractAddress
              )}
              fullWidth
              helperText={
                formik.touched.contractAddress && formik.errors.contractAddress
              }
              label="Contract Address"
              margin="normal"
              name="contractAddress"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.contractAddress}
              variant="outlined"
              placeholder="0x"
            />
            <TextField
              error={Boolean(formik.touched.treasury && formik.errors.treasury)}
              fullWidth
              helperText={formik.touched.treasury && formik.errors.treasury}
              label="Treasury Address"
              margin="normal"
              name="treasury"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.treasury}
              variant="outlined"
              placeholder="0x"
            />
            <Grid container spacing={3}>
              <Grid item xs={6} md={3}>
                <FormControl fullWidth style={{ marginTop: "16px" }}>
                  <InputLabel>Type</InputLabel>
                  <Select
                    name="coinType"
                    value={formik.values.coinType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Type"
                  >
                    <MenuItem value={0}>Token</MenuItem>
                    <MenuItem value={1}>NFT</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={18} md={9}>
                <TextField
                  error={Boolean(formik.touched.coin && formik.errors.coin)}
                  fullWidth
                  helperText={formik.touched.coin && formik.errors.coin}
                  label={`${
                    formik.values.coinType == 0 ? "Token" : "NFT"
                  } Contract Address`}
                  margin="normal"
                  name="coin"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.coin}
                  variant="outlined"
                  placeholder="0x"
                />
              </Grid>
            </Grid>
            <Box sx={{ py: 2 }}>
              {isWorking && (
                <Grid align="center">
                  <CircularProgress />
                </Grid>
              )}
              {!isWorking && (
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              )}
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
AddDao.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddDao;

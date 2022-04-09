import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

/*
uint8 chainId,
        address contractAddress,
        string calldata name,
        string calldata logoURI,
        address membershipModule, (NFT / Token, Address)
        address treasury
*/
const AddDao = () => {
  const formik = useFormik({
    initialValues: {
      networkId: 1,
      contractAddress: "",
      logoURI: "",
      treasury: "",
    },
    validationSchema: Yup.object({
      contractAddress: Yup.string()
        .max(255)
        .required("DAO contract address is required"),
      logoURI: Yup.string().max(255),
      treasuryAddress: Yup.string().max(255),
    }),
    onSubmit: () => {
      router.push("/");
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
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            ></Box>
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
            />
            <Box sx={{ py: 2 }}>
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
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
AddDao.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddDao;

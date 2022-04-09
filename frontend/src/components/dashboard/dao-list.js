import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const daos = [
  {
    id: uuid(),
    name: "Decentraland",
    imageUrl:
      "https://worker.snapshot.org/mirror?img=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmZAWXeepWnWpsdEXnkym5nvipxGCj87sS6SABBV8x6pPh",
    members: 12000,
  },
  {
    id: uuid(),
    name: "CowDAO",
    imageUrl:
      "https://worker.snapshot.org/mirror?img=https%3A%2F%2Fgateway.pinata.cloud%2Fipfs%2FQmQxFkVZzXFyWf73rcFwNPaEqG5hBwYXrwrBEX3aWJrn2r%2Fcowprotocol.png",
    members: 3800,
  },
  {
    id: uuid(),
    name: "Proof Of Humanity",
    imageUrl:
      "https://worker.snapshot.org/mirror?img=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmVg3dGTGDzqHNK2RJp9un6oYjA8n6ReQMnwNNKQgqLLDZ",
    members: 49000,
  },
  {
    id: uuid(),
    name: "Sushi",
    imageUrl:
      "https://worker.snapshot.org/mirror?img=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmT1Ban8im8JQm2gqYSoMGaLZTgxR8nFyrYBF7MgWvRKFh",
    members: 27000,
  },
  {
    id: uuid(),
    name: "Aave",
    imageUrl:
      "https://worker.snapshot.org/mirror?img=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmRKgfxSiCU3EmkN52ZaxgKvDyPFUR5DdPvnKxwyLRncKS",
    members: 33000,
  },
];

export const DaoList = (props) => {
  return (
    <Card {...props}>
      <CardHeader title="Registered DAOs" />
      <Divider />
      <List>
        {props.daoList.map((dao, i) => (
          <ListItem divider={i < props.daoList.length - 1} key={dao.id}>
            <ListItemButton
              onClick={() => {
                props.onDaoClick(dao);
              }}
              selected={
                props.chosenDao &&
                props.chosenDao.tokenAddress == dao.tokenAddress
              }
            >
              <ListItemAvatar>
                <img
                  alt={dao.name}
                  src={dao.logoUri}
                  style={{
                    height: 48,
                    width: 48,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={dao.name}
                secondary={`${dao.members} members`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

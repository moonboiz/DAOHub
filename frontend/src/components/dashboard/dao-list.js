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
              <ListItemText primary={dao.name} />
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

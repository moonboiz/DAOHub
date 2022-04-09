import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { getMembers } from "../../api/getMembers";
import { useAsync } from "react-use";
import LinearIndeterminate from "./progressBar";
import {Box, Card, CardHeader} from "@mui/material";
import {getTreasury} from "../../api/getTreasury";

const getRows = async ({chainId, tokenAddress}) => {
  const members = await getMembers({chainId:chainId, tokenAddress:tokenAddress });
  let rows = [];
  members.forEach(function (member) {
    const address = member.address;
    const daoPart = member.balance / member.total_supply;
    const logoUrl = member.logo_url;
    rows.push({ address, daoPart, logoUrl });
  });
  console.log(rows);
  return rows;
};

export const SingleDao = ({chainId, tokenAddress,daoLogo,daoName, treasuryAddress}) => {
  const rows2 = useAsync(async () => {
      return getRows({chainId:chainId, tokenAddress:tokenAddress });
  }, [chainId,tokenAddress]);

  const money = useAsync(async () => {
      return getTreasury({chainId:chainId, treasuryAddress:treasuryAddress });
  }, [chainId,treasuryAddress]);

  const title = `${daoName}`
  return (
        <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={daoLogo} />
                </ListItemAvatar>
                {(money.loading || (!money.loading && money.value <= 0)) &&
                <ListItemText
                    primary={title}
                    secondary={"members"}
                />
                }
                {(!money.loading && money.value > 0) &&
                <ListItemText
                    primary={
                        title + "  " +
                        parseFloat(money.value).toFixed(2) +
                        "$"
                    }
                    secondary={"members"}
                />
                }
            </ListItem>
            <Divider sx={{ width: "100%", maxWidth: 500}}/>
            {rows2.loading &&
            <LinearIndeterminate maxWidth = {500}/>
            }
            {!rows2.loading &&
            rows2.value.map((row) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={row.logoUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={row.address}
                  secondary={
                    "owns " +
                    parseFloat(row.daoPart * 100).toFixed(2) +
                    "% of this DAO"
                  }
                />
                <Divider variant="inset" component="li" />
              </ListItem>
            ))}
        </List>
  );
};

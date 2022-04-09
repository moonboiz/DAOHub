import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import {getMembers} from "../../api/getMembers";
import {useAsync} from "react-use";

const getRows = async (chainId, tokenAddress) => {
    const members = await getMembers(chainId,tokenAddress)
    let rows = []
    members.forEach(function (member) {
        const address = member.address;
        const daoPart = member.balance / member.total_supply
        const logoUrl = member.logo_url
        rows.push({address,daoPart,logoUrl})
    });
    console.log(rows)
    return rows
}

export default function SingleDao(chainId,tokenAddress) {
    const rows2 = useAsync( async () => {
        return getRows(chainId,tokenAddress)
    },[]);
    return (
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            {!rows2.loading &&rows2.value.map((row) => (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={row.logoUrl} />
                    </ListItemAvatar>
                    <ListItemText primary={row.address} secondary={"owns " + parseFloat(row.daoPart * 100).toFixed(2) + "% of this DAO"}/>
                    <Divider variant="inset" component="li" />
                </ListItem>
            ))}
        </List>
    );
}

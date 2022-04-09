// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import {getMembers} from "../../api/getMembers";
// import {useAsync} from "react-use";
//
// // const getRows = async (chainId, tokenAddress) => {
// //     const members = await getMembers(chainId,tokenAddress)
// //     let rows = []
// //     members.forEach(function (member) {
// //         const address = member.address;
// //         const daoPart = member.balance / member.total_supply
// //         rows.push({address,daoPart})
// //     });
// //     console.log(rows)
// //     return rows
// // }
//
// export default function SingleDao(chainId,tokenAddress) {
//     const rows2 = useAsync( async () => {
//         return getRows(chainId,tokenAddress)
//     },[]);
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Wallet</TableCell>
//                         <TableCell align="left">DAO ownership</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {!rows2.loading &&rows2.value.map((row) => (
//                         <TableRow
//                             key={row.address}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">
//                                 {row.address}
//                             </TableCell>
//                             <TableCell align="left">{row.daoPart}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }

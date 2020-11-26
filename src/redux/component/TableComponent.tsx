import React, { ReactElement, useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    TextField,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
  } from "@material-ui/core";

import EditIcon from "@material-ui/icons";
import { connect } from "react-redux";
import { fetchDetails, updateDetailsAction } from "../redux/userdetails/actions";
import { userDetailsSelector } from "../redux/userdetails/selector";
import { userDetailsReducer } from "../redux/userdetails/reducer";
import ReactDataGrid  from "react-data-grid";
import { UserDetails } from "../redux/userdetails/types";
import MaterialTable from "material-table";

export const TableComponent = (): ReactElement => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDetails())
    }, []);


    const defaultColumnProperties = {
        resizable: true
      };

    const columns2 = [
        { key: "ID", name: "ID", editable: false, width: 120 },
        { key: "name", name: "Name", editable: true, width: 600, height: 200, multiline: true, resizable: true },
        { key: "email", name: "email", editable: true, width: 200, resizable: true },
        { key: "address", name: "Address", editable: true, width: 150, resizable: true }        
      ].map(c => ({ ...c, ...defaultColumnProperties }));
    
    const [columns, setColumns] = useState([
        { title: 'ID', field: 'ID', type: 'numeric'},
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Address', field: 'address' },     
      ]);
   
      
  

    //Sample data for render testing before putting it in redux
    /* function createData(id: number, name: string, email:string, address:string ) {
        return { id, name, email, address };
    }
      
    const rows = [
        createData(1,'John','john@.gmail.com','22 Street Brisbane'),
        createData(2,'Sai','sai@.gmail.com','8 Brisbane'),
        createData(3,'mk','mk@.gmail.com','7 Street Brisbane'),
        createData(4,'steve','steve@.gmail.com','12 Street Brisbane'),
        createData(5,
            'saipradnya','saip@.gmail.com','1 Street Brisbane'),
      ];
      */
      
     const userDetails = useSelector(userDetailsSelector);
     console.log(userDetails);

     const [data, setData] = useState(userDetails);

     const updateUserDetails = (newList: UserDetails[]) => {
        dispatch(updateDetailsAction(newList));
        // dispatch(fetchDetails());
     }

     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: any, field: any): void => {
         const { value } = event.currentTarget;
         console.log(value);
         console.log(id);
         console.log(field);
         let newUpdatedList: { ID: number; name: string; email: string; address: string; }[] = []
         const rowIndex = userDetails.findIndex(td => td.ID === id);
         userDetails.map(userDet => {
            newUpdatedList.push({
                ID: userDet.ID,
                name: field === 'name' && userDet.ID === id ? value : userDet.name,
                email: field === 'email' && userDet.ID === id ? value : userDet.email,
                address: field === 'address' && userDet.ID === id ? value : userDet.address 
            })
         })
         
         updateUserDetails(newUpdatedList);
         
     }

     
    return (
        <>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        ID
                    </TableCell>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Address
                    </TableCell>                    
                </TableRow>
            </TableHead>
            <TableBody>
            {userDetails.map((row) => (
              <TableRow key={row.ID}>
                <TableCell>
                    {row.ID}
                </TableCell>
                <TableCell align="right">
                <TextField
                        id="name"
                        name="name"
                        variant="standard"
                        type="required"
                        defaultValue={
                            row.name
                        }
                        multiline
                        fullWidth
                        onChange={(e) => handleChange(e,row.ID, 'name')}                            
                    />
                </TableCell>
                <TableCell align="right">
                <TextField
                            id="address"
                            name="address"
                            variant="standard"
                            type="required"
                            defaultValue={
                              row.address
                            }
                            multiline
                            fullWidth
                            onChange={(e) => handleChange(e,row.ID, 'address')}                            
                          />
                </TableCell>
                <TableCell align="right">
                <TextField
                            id="email"
                            name="email"
                            variant="standard"
                            type="required"
                            defaultValue={
                              row.email
                            }
                            multiline
                            fullWidth
                            onChange={(e) => handleChange(e,row.ID, 'email')}                            
                          />
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        </>
        
    )
  
}

  
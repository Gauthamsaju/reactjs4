import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then(response=>{
            setPosts(posts=response.data)
            console.log(response.data)
        })
        .catch(error=>console.log(error))
        },[])

        

        const deleteValues=(id)=>{
            axios.delete("http://localhost:3000/posts/"+id)
            .then(response=>{
                alert('deleted')
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Grade</TableCell>
       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((value,index)=>{
                        return<TableRow>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.grade}</TableCell>
                            <TableCell><Button variant='contained' color="error" onClick={()=>deleteValues(value.id)}>delete</Button></TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
      
    </div>
  )
}

export default View


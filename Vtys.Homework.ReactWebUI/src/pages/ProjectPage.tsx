import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiHelper from "../helpers/apiHelper";
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Project from "../types/entities/Project";

const ProjectPage = () => {
  const navigate = useNavigate();


  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    apiHelper.get<Project[]>("projects").then((data) => {
      setProjects(data);
    })
  }, [])

  return (
    <Grid marginTop={12} container>
      <Grid md={2}></Grid>
      <Grid md={8}>
        <Paper>
          <Box padding={2}>
            <Grid container gap={1}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="project table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">ID</TableCell>
                      <TableCell align="right">Proje Adı</TableCell>
                      <TableCell align="right">Başlangıç Tarihi</TableCell>
                      <TableCell align="right">Bitiş Tarihi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell align="right">{project.id}</TableCell>
                        <TableCell align="right">{project.name}</TableCell>
                        <TableCell align="right">{project.startDate}</TableCell>
                        <TableCell align="right">
                          {project.finishDate}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid md={2}></Grid>
              <Grid md={12}>
                <Grid container justifyContent={"flex-end"} spacing={1}>
                  <Grid item>
                    <Button variant="contained" size="large">
                      Ekle
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large"  onClick={() => {
                              navigate(`/projects/detail`);
                            }}>
                      Detayları Gör
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large">
                      Sil
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large">
                      Güncelle
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default ProjectPage;
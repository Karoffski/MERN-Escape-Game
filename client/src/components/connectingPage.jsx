import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../userContext";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();


const ConnexionForm = () => {
  // decalration des states 
  const { user, login,changeUser } = useContext(UserContext);
  const [emailUsers, setEmailUsers] = useState([]);
  const [users, setUsers] = useState([]);

  
  const [validPassword, setValidPassword] = useState("");
  //const [valid,setValid]=useState("")
  //temporaire, pour accès aux données
  const getUser = () => {
    return axios
      .get("http://localhost:4000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();
  const getEmailUser = () => {
    return axios
      .get(`http://localhost:4000/users/${user.email}`)
      .then((res) => {
        setEmailUsers(res.data);
        console.log(res.data)
      })
      .catch((err) => console.error(err));
  };
 
 const handleSubmit=(e) => {
  e.preventDefault()
    getEmailUser();
    login()
    navigateLog()
  }

  const navigateLog=() => {
    if(emailUsers.email===user.email && emailUsers.password===validPassword){
      console.log("hello")
      navigate("/accueilPage")
     }
    }
  /*let validUpdate = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === validEmail &&
        users[i].password === validPassword
      ) {
        validUpdate += users[i]._id;
        console.log(validUpdate);
        break;
      } else {
        console.log("false");
      }
    }
    setValid(validUpdate)
  };
  console.log(users)
  console.log(validEmail)
  console.log(validPassword)*/
 
 console.log(users)
 console.log(emailUsers)
 console.log(user)
 
 

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email2"
                  autoComplete="email"
                  autoFocus
                  onChange={changeUser}
                />
                <Grid item xs>
                    <Link to="/accueilPage" variant="body2">
                      test context
                    </Link>
                  </Grid>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => setValidPassword(event.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              
                  onClick={handleSubmit} 
                >
                  
                  <Link to="" variant="body2">
                    Sign In
                  </Link>
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/inscriptionPage" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default ConnexionForm;

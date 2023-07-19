import React from "react";
import MUIDataTable from "mui-datatables";
import styles from "../components/Dashboard.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography ,Box } from "@mui/material";
// import { makeStyles } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import LinearProgress from '@mui/material/LinearProgress';
 
const useStyles = makeStyles((theme) => ({
    container: {
      position: 'relative',
      width: '100%',
      height: 40,
      background: 'linear-gradient(to right, #000, transparent)',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   marginBottom:"-30px"
    },
    text: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }));
const Dashboard = () => {
  const progress = 85;
  const progress2 = 66;
  const progress3 = 90;
  const progress4 = 30;

 
  const columns = [
    {
      name: "customername",
      label: "Customer Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "country",
      label: "Country",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "Status",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (row, data) => {
          return (
            <button type="button" class="btn btn-success btn-sm">
              Active
            </button>
          );
        },
      },
    },
  ];
  const data = [
    {
      customername: "Jane Cooper",
      company: "Microsoft",
      phoneNumber: "(255)555-0118",
      email: "jane@microsoft.com",
      country: "United State",
      status: "",
    },
    {
      customername: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "flody@yahoo.com",
      country: "Kiribati",
      status: (
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      ),
    },
    {
      customername: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302)555-0107",
      email: "ronald@adobe.com",
      country: "israel",
      status: "",
    },
    {
      customername: "Marvin Mckinney",
      company: "Tesla",
      phoneNumber: "(252)555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "",
    },
    {
      customername: "Jerom Bell",
      company: "Google",
      phoneNumber: "(629)555-0129",
      email: "jerom@google.com",
      country: "Reunion",
      status: "",
    },
    {
      customername: "Kathryn",
      company: "Mirosoft",
      phoneNumber: "(406)555-0129",
      email: "kathryn@microsoft.com",
      country: "Curcao",
      status: "",
    },
  ];
  const options = {
    filterType: "checkbox",
  };
  const progress5 = 45;

  const classes = useStyles();
  return (
    <>
      <div>
        <div className="row">
          <div className="col-7" id={styles.Upper}>
           
            <div className="row">
              <div
                className="col-3"
                style={{ position: "relative", width: 100, height: 100 }}
              >
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={70} // Adjust the size of the circle
                  thickness={2} // Adjust the thickness of the circle's stroke
                  color="primary" // Change the color of the circle
                  style={{ marginTop: "40px" }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  {`${progress}%`}
                </Typography>
                <h6>Current Customer</h6>
              </div>
              <div
                className="col-3"
                style={{ position: "relative", width: 100, height: 100, }}
              >
                <CircularProgress
                  variant="determinate"
                  value={progress2}
                  size={70} // Adjust the size of the circle
                  thickness={2} // Adjust the thickness of the circle's stroke
                  // color="inherit" // Change the color of the circle
                  style={{ marginTop: "40px", color: "green" }}
                />
                 <Typography
                  variant="h6"
                  component="div"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                    // transform: 'rotate(90deg)'
                  }}
                >
                  {`${progress2}%`}
                </Typography>
                <h6>New customers</h6>
              </div>
              <div
                className="col-3"
                style={{ position: "relative", width: 100, height: 100 }}
              >
                <CircularProgress
                  variant="determinate"
                  value={progress3}
                  size={70} // Adjust the size of the circle
                  thickness={2} // Adjust the thickness of the circle's stroke
                  // color="primary" // Change the color of the circle
                  style={{ color: "red", marginTop: "40px" }}
                />
                 <Typography
                  variant="h6"
                  component="div"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                    // transform: 'rotate(90deg)'
                  }}
                >
                  {`${progress3}%`}
                </Typography>
                <h6>Target Customers</h6>
              </div>
              <div
                className="col-3"
                style={{ position: "relative", width: 100, height: 100 }}
              >
                <CircularProgress
                  variant="determinate"
                  value={progress4}
                  size={70} // Adjust the size of the circle
                  thickness={2} // Adjust the thickness of the circle's stroke
                  // color="primary" // Change the color of the circle
                  style={{ color: "green", marginTop: "40px" }}
                />
                 <Typography
                  variant="h6"
                  component="div"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                    // transform: 'rotate(90deg)'
                  }}
                >
                  {`${progress4}%`}
                </Typography>
                <h6>Current Customer</h6>
              </div>
            </div>
          </div>
           <div className="col-4" id={styles.secondBox}>
               <h4>Start Overview</h4>
               {/* <Box>
                 <Typography variant="body1">{`${progress5}%`}</Typography>
               </Box> */}
               <p style={{textAlign:"left"}}>Active</p>
               {/* <label htmlFor="" style={{textAlign:"left"}}>Active</label> */}
               <LinearProgress variant="determinate" value={65} />
               <p style={{textAlign:"right"}}>65%</p>
                <p style={{textAlign:"left"}}>Inactive</p>
                {/* <label htmlFor="" style={{textAlign:"left"}}>Inactive</label> */}
               <LinearProgress variant="determinate" value={88}></LinearProgress>
               <p style={{textAlign:"right"}}>88%</p>
           </div>
        </div>
      </div>
      <div>
        <MUIDataTable
          title={"Active Members"}
          data={data}
          columns={columns}
          options={{
            options: options,
            selectableRows: "none",
            viewColumns: false,
            print: false,
            download: false,
          }}
        />
      </div>
    </>
  );
};

export default Dashboard;

import React, { Component } from 'react';
import { GET_LIST, GET_MANY, Responsive, ViewTitle } from 'react-admin';
import openSocket from 'socket.io-client';
import { Row, Col } from 'react-bootstrap'

import dataProvider from '../dataProvider';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Icon from '@material-ui/icons/PersonAdd';
import IconH from '@material-ui/icons/Home';
import IconshoppingCart from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
    card: {
      display: 'flex',
      backgroundColor: '',

    },   
    root: {
        width: '100%',
      },
    smallBox: {
        borderRadius:'3px',
        minHeight:'170px',
        height: 'auto',
        marginBottom:'0',  
        backgroundColor:'#fff', 
        width: '100%',
    },
    inner: {
        padding: '26px',
        height: '68px',
        
    },
    pdiRow: {
        padding: '0 5px',
    },
    mrgCard: {
        width: '95%',
        margin: '0 auto',
        marginBottom:' 10% !important',
    },
     titleNum: {
        color: '#333',
     },
     title: {
        color: '#6f6f6f',
     },
    iconBox: {
        position: 'relative',        
        fontSize: '94px',
        bottom: '40px',
        right: '64%',
        color: 'rgb(76, 175, 80)'
    },
    iconBoxShop: {
        position: 'relative',        
        fontSize: '94px',
        bottom: '40px',
        right: '64%',
        color: 'rgb(255, 152, 0)',
    },
    iconHome: {
        marginLeft:'5px',
    },
    pdiLi: {
        padding:'18px 0',
    },
    mrgHr: {
        margin:'20px 0',
        marginBottom:'30px',
    },
    Hcard: {
        width:'100%',
        minHeight:'303px',
        height:'auto',
        marginBottom: '38px',
    },
    Hwelcome: {
        minHeight:'100px',
        height:'auto',
        marginBottom: '28px',
    },
    WidthRow: {
        width: '100%',
        padding: '0 19px',
        paddingTop: '27px',
    },
    WidthCard: {
        width:'90%',
        margin:' 0 auto',
    }
  });
class Dashboard extends Component {
    state = {};
    io = openSocket.connect('ws://192.168.20.224:5555')

    componentDidMount() {
        const aMonthAgo = new Date();
        aMonthAgo.setDate(aMonthAgo.getDate() - 30);

        this.io.on('connect', data => {
            this.io.emit('message', 'order,user')
        })
        this.io.on('m', data => {})

        dataProvider(GET_LIST, 'users', {
            filter: { date_gte: aMonthAgo.toISOString() },
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 50 },
        })
            .then(response =>
                response.data
                        .filter(order => order.status !== 'cancelled')
                        .reduce(
                            (stats, order) => {
                                if (order.status !== 'cancelled') {
                                    stats.revenue += order.total;
                                    stats.nbNewOrders++;
                                }
                                if (order.status === 'ordered') {
                                    stats.pendingOrders.push(order);
                                }
                                return stats;
                            },
                            { revenue: 0, nbNewOrders: 0, pendingOrders: [] }
                        )
            )
            .then(({ revenue, nbNewOrders, pendingOrders }) => {
                this.setState({
                    revenue: revenue.toLocaleString(undefined, {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }),
                    nbNewOrders,
                    pendingOrders,
                });
                return pendingOrders;
            })
            .then(pendingOrders =>
                pendingOrders.map(order => order.customer_id)
            )
            .then(customerIds =>
                dataProvider(GET_MANY, 'users', { ids: customerIds })
            )
            .then(response => response.data)
            .then(customers =>
                customers.reduce((prev, customer) => {
                    prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                    return prev;
                }, {})
            )
            .then(customers =>
                this.setState({ pendingOrdersCustomers: customers })
            );
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
  <div className={classes.root}>


<Grid container spacing={24}>

<Row className={classes.WidthRow}>

<Grid item xs={12} sm={12} md={12} lg={12}>
      <Typography variant="display1" gutterBottom  align="right">
        آمار سایت
      </Typography>
</Grid>

<Grid item xs={12} sm={12} md={12} lg={12}>
<Divider inset className={classes.mrgHr}/>
</Grid>
<Grid item xs={12} sm={8} md={8} lg={8}>
<Row className={classes.pdiRow}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
        <Grid className={classes.mrgCard}>
          <Paper className={classes.paper}>
          <Card className={classes.card}>          
            <div className={classes.smallBox}>
                <div className={classes.inner}>               
                     <CardContent>
                         <Typography variant="display1" gutterBottom className={classes.titleNum}>
                         150
                        </Typography>
                          <Typography variant="headline" gutterBottom className={classes.title}>
                          سفارش جدید
                         </Typography>
                    </CardContent>
                </div>
                <div>               
                <IconshoppingCart className={classes.iconBoxShop}/>                 
               </div>          
            </div>      
        </Card>     
          </Paper>
          </Grid> 
          </Grid> 
          <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid className={classes.mrgCard}>
          <Paper className={classes.paper}>
          <Card className={classes.card}>         
            <div className={classes.smallBox}>
                <div className={classes.inner}>
                
                     <CardContent>
                       <Typography variant="display1" gutterBottom  className={classes.titleNum}>
                         150
                        </Typography>
                          <Typography variant="headline" gutterBottom className={classes.title}>
                          کاربر جدید
                         </Typography>
                    </CardContent>
                </div>                              
                <Icon className={classes.iconBox}/>
            </div>           
        </Card>         
          </Paper>
        </Grid>   
        </Grid>  

        
        </Row>
        <Grid item xs={12} sm={12} md={12} lg={12}>        
          <Paper className={classes.paper}>
          <Card className={classes.card}>
            
          <AppBar position="static">
                    <Toolbar>     
                    <Typography variant="body2" align="right" gutterBottom color="inherit" className={classes.flex}>
                         خوش آمدید
                        </Typography>        
                     </Toolbar>
                 </AppBar>      
        </Card>
        <Card className={classes.card}>         
            <div className={classes.Hwelcome}>
                <div className={classes.inner}>    
                 <p>به پنل ادمین خوش آمدید </p>                            
                </div>                     
            </div>       
        </Card>
          </Paper>
          </Grid>  
</Grid>
<Grid item xs={12} sm={4} md={4} lg={4}>  
<div className={classes.WidthCard}>      
          <Paper className={classes.paper}>
          <Card className={classes.card}>
            
          <AppBar position="static">
                    <Toolbar>     
                    <Typography variant="body2" align="right" gutterBottom color="inherit" className={classes.flex}>
                         کاربران جدید
                        </Typography>        
                     </Toolbar>
                 </AppBar>      
        </Card>
        <Card className={classes.card}>         
            <div className={classes.Hcard}>
                <div className={classes.inner}>  
                <List component="nav">
                    <ListItem button>
                        <Avatar>
                             <ImageIcon />
                        </Avatar>
                             <ListItemText primary="نام کاربر" secondary="1 خرداد , 1397" />
                    </ListItem>
                         <li>                      
                         </li>
                    <ListItem button>
                        <Avatar>
                             <ImageIcon />
                        </Avatar>
                              <ListItemText primary="نام کاربر" secondary="20 فروردین , 1397" />
                    </ListItem>
                    <ListItem button>
                        <Avatar>
                              <ImageIcon />
                        </Avatar>
                              <ListItemText primary="نام کاربر" secondary="15 فروردین , 1397" />
                    </ListItem>
                    <ListItem button>
                        <Avatar>
                              <ImageIcon />
                        </Avatar>
                              <ListItemText primary="نام کاربر" secondary="15 فروردین , 1397" />
                    </ListItem>
                    
                </List>                              
                </div>                     
            </div>       
        </Card>
          </Paper>
          </div>
 </Grid>   
 </Row>     
        
         
          
          </Grid>  
    </div>



          </div>    
              
        )
       
    }
}

export default withStyles(styles)(Dashboard);



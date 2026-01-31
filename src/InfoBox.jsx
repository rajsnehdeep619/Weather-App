import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1637443719654-04e839df3aa0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL ="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={
                info.humidity >80
                ?RAIN_URL
                :info.temp >15
                ?HOT_URL
                :COLD_URL
            }
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
            {info.city}{
                info.humidity >80
                ?<ThunderstormIcon/>
                :info.temp >24
                ?<WbSunnyIcon/>
                :<SevereColdIcon/>
            }
            </Typography>
            <Typography variant="body2" color="textSecondary" component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>humidity = {info.humidity}</div>
            <div>Min Temp ={info.tempMin}&deg;C</div>
            <div>Max Temp ={info.tempMax}&deg;C</div>
            <p>The Weather can be described as <i>{info.weather}</i> and feel Like {info.feelsLike}&deg;C</p>
            </Typography>
            </CardContent>
            </Card>
            </div> 
        </div>
    )
}
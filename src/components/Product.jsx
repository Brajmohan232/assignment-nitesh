import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DialogBox from './DialogBox';
export default function Product({image ,title,description}) {

  return (
    <Card sx={{ maxWidth: 345  }}>
  
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image} style={{backgroundPosition:"center" , backgroundAttachment:"fixed"}}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
       
        <DialogBox image ={image} title = { title}  description ={description}/>
        </Button>
      </CardActions>
    </Card>
  );
}
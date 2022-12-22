import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

export default function ProductCard({name, price, image, quantityPurchased, handleAddProduct, handleRemoveProduct, id }) {
  return (
    <Card sx={{ width: 245 }}>
      <CardActionArea>

        {/* <div className='vertical-center'>
        <CardMedia
          component="img"
          height="140"
          image={image}
          src={image}
          alt={name}
          // width='40'
          style={{ width: '100px'}}
        />
        </div> */}

        <img src={image} alt={name} className="product-img" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className='capitalize'>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button onClick={() => handleRemoveProduct(id)}>
    <RemoveSharpIcon/>
   </Button>
  <Button variant="contained">{quantityPurchased}</Button>
  <Button onClick={() => handleAddProduct(id)}><AddIcon /></Button>
</ButtonGroup>

      </CardActions>
    </Card>
  );
}

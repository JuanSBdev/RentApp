import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useSelector } from 'react-redux'
  
  export default function PlaceData() {
    let place = useSelector(state => state.detail[0])
    return (
      <Card className="mt-2 sm:w-4/5">
       
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Info
          </Typography>
          <Typography variant="paragraph">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
          {place && <Typography variant="paragraph">
            Price per night {place.price_per_night}$
          </Typography>}
          <Typography variant="paragraph">
            Services: Wi-fi, garage, breackfast, x bedrooms, private bath, room service
          </Typography>
        </CardBody>
        
        
      </Card>
    );
  }
import { Rating } from '@mui/material';

function StarRating({avaliacao}) {
  return (
    <div>
      <Rating
        name="half-rating-read"
        defaultValue={avaliacao}
        precision={0.1}
        readOnly
      />
    </div>
  );
}

export default StarRating;

import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import './index.scss';

export interface Props {
  rating: number;
}

export default function StarRating(props: Props) {
  const numStars = Math.round(props.rating / 2);

  const fullStars = []
  const emptyStars = []

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <div className="movie-rate">
      {fullStars.map(index => (
        <FaStar key={index} />
      ))}
      {emptyStars.map(index => (
        <FaRegStar key={index} />
      ))}
    </div>
  )
}

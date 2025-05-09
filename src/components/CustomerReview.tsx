type CustomerReviewProps = {
  stars: number,
  date: Date,
  review: string,
  name: string,
}

export default function CustomerReview(c: CustomerReviewProps) {
  return (
    <div>
      <p>{c.review}</p>
    </div>
  )
}
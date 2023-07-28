export default function Jokes({ setup, punchline, downvotes, upvotes, isPun, comments }) {
  // console.log(comments[0].name);
  return (
    <>
      {setup && <h4>Setup: {setup}</h4>}
      <p>Punchline: {punchline}</p>
      <p>{downvotes}</p>
      <p>{isPun}</p>
      <hr />
    </>
  )
}


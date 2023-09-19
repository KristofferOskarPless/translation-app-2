export async function getServerSideProps() {
  // Fetch the rows from the table
  const rows = await fetch('/api/rows').then(response => response.json());

  // Return the rows as props
  return { props: { rows } };
}
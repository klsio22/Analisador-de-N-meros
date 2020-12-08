function Tempo() {
  const dynamicDate = new Date();

  const dynamicDateString = dynamicDate.toGMTS();

  return <div>{dynamicDateString} (dinamico)</div>;
}

export default Tempo;

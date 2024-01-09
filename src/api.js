const useMutation = async (url) => {
  const json = await (await fetch(url)).json();
  const results = json.data.results;
console.log("results = " + results)


  return results;
};

export default useMutation;

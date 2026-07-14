function useAddProduct(
  newData,
  setNewData,
  resetDataStructure,
  allDatas,
  setAllDatas,
) {
  const newProducts = [newData, ...allDatas];
  setAllDatas(newProducts);
  setNewData(resetDataStructure);
  return <></>;
}

export default useAddProduct;

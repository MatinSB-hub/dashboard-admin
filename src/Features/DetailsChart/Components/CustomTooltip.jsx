function CustomTooltip({ payload }) {
  return (
    <div className="px-5 py-2 bg-white rounded-2xl border">
      <span>{`${payload[0]?.payload?.name} : ${payload[0]?.payload?.value}`}</span>
    </div>
  );
}

export default CustomTooltip;

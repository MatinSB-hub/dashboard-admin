function SectionTitle({ title, button }) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold">
        <h2 >{title}</h2>
      </div>
      <div className="flex items-center gap-3">{button}</div>
    </div>
  );
}

export default SectionTitle;

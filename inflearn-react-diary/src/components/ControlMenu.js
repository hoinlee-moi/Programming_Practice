const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select className="ControlMenu" defaultValue={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => {
        return (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        );
      })}
    </select>
  );
};

export default ControlMenu;

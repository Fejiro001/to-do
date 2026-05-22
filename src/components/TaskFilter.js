const filters = [
  { index: 0, name: "ALL" },
  { index: 1, name: "ACTIVE" },
  { index: 2, name: "COMPLETED" }
];

function TaskFilter(props) {
  const { filter, onFilterChange } = props;
  return (
    <ul className="task-filter">
      {filters.map((f) => (
        <li key={f.index}>
          <button
            className={`${f.name === filter ? "active" : ""}`}
            onClick={() => onFilterChange(f.name)}>
            {f.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskFilter;

import { useState } from "react";

const ListItens = () => {
  const initialList = ["Lucas", "Karla", "Philipe", "Julia", "Vinicius"];
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const updateNameInList = (indexMainList) => {
    setList((prevList) =>
      prevList.map((item, index) => (index === indexMainList ? name : item))
    );
    resetEditState();
  };

  const handleAddNewName = () => {
    if (name.trim() !== "") {
      setList((prevList) => [...prevList, name]);
      setName("");
    }
  };

  const resetEditState = () => {
    setName("");
    setEditIndex(null);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setName(list[index]);
  };

  const handleDelete = (indexMainList) => {
    if (
      confirm(
        "Do you want to delete the name " +
          list[indexMainList] +
          " from the list?"
      )
    ) {
      setList((prevList) => prevList.filter((_, index) => index !== indexMainList));
    }
  };

  const renderItem = (item, index) => {
    const isEditing = editIndex === index;
    return (
      <li key={index}>
        {item}{" "}
        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => updateNameInList(index)}>Submit</button>
          </>
        ) : (
          <button onClick={() => handleEditClick(index)}>
            Click to change name
          </button>
        )}{" "}
        <button onClick={() => handleDelete(index)}>Click to delete name</button>
      </li>
    );
  };

  return (
    <div>
      <ul>{list.map((item, index) => renderItem(item, index))}</ul>
      <input
        type="text"
        value={name}
        placeholder="Add new name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddNewName}>Add name</button>
      <button onClick={() => setList(initialList)}>Reset list</button>
    </div>
  );
};

export default ListItens;

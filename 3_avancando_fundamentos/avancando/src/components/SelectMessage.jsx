const SelectMessage = ({handleSetMessage}) => {
    const messagesOption = ['Teste', 'Sei lá, to sem criatividade', 'Uma terceira opção'];
    return (
    <div>
      <button onClick={() => handleSetMessage(messagesOption[0])}>Message 1</button>
      <button onClick={() => handleSetMessage(messagesOption[1])}>Message 2</button>
      <button onClick={() => handleSetMessage(messagesOption[2])}>Message 3</button>
    </div>
  )
}

export default SelectMessage

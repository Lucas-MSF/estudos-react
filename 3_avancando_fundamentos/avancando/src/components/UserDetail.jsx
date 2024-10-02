const UserDetail = ({user}) => {
  return (
    <div>
      <p>Nome: {user.name}</p>
      <p>Profissao: {user.job}</p>
      <p>Idade: {user.age} </p>
      {user.age >= 18 ? (<p>Tem permissão para dirigir</p>) : (<p>Não pode dirigir</p>)}
    </div>
  )
}

export default UserDetail

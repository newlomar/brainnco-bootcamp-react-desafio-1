import SideBar from './SideBar'
import Conteudo from './Conteudo'

function Main({ id }) {
  return (
    <main id={id}>
      <SideBar />
      <Conteudo />
    </main>
  )
}

export default Main
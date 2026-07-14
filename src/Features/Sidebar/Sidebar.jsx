import menue from  "../../data/menue"
import Menus from './components/Menus'
import SidebarHeader from './components/SidebarHeader'

function Sidebar() {
  return (
    <aside className="min-w-68 bg-white h-screen border-l-2 primary-border-color sticky top-0 p-6">
        <SidebarHeader/>
        <Menus menue={menue}/>
    </aside>
  )
}

export default Sidebar
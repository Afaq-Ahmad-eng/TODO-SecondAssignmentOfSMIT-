import style from './Container.module.css'
import Sidebar from '../sidebar/Sidebar'
import MainContent from '../mainContent/MainContent'
import ExtrasThings from '../panel/ExtrasThings'

function Container() {
  return (
    <div className={style.layout}>
    <Sidebar className={style.span4}/>
    <MainContent className={style.span4}/>
    <ExtrasThings className={style.span4}/>
    </div>
  )
}

export default Container
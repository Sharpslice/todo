import './styles.css';
import './components.css';
import './sidebar.css';
import './content.css';
import { setUpButtonEventListeners } from './sidebar';
import loadProjects from './renderProjectList';
function init()
{
    setUpButtonEventListeners();
    loadProjects();
}
init();
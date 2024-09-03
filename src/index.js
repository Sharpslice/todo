import './styles.css';
import './components.css';
import { setUpButtonEventListeners } from './sidebar';
import loadProjects from './renderProjectList';
function init()
{
    setUpButtonEventListeners();
    loadProjects();
}
init();
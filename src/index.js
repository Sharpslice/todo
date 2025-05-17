import './css/styles.css';
import './css/components.css';
import './css/sidebar.css';

import './css/expanded.css';
import './css/tasks.css';
import './css/dropdown.css';

import { setUpButtonEventListeners } from './sidebar';
import loadProjects from './renderProjectList';
function init()
{
    setUpButtonEventListeners();
    loadProjects();
}
init();
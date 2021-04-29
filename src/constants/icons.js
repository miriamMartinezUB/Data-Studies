import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import PublishIcon from '@material-ui/icons/Publish';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

export const nameIcons = {
    DELETE: 'delete',
    MAIL: 'mail',
    SEARCH: 'search',
    DOWNLOAD: 'download',
    SHOW: 'show',
    UPLOAD: 'upload',
    NEW: 'new',
    ADD_USER: 'add_user',
    USER: 'user'
}

export const iconsByName = {
    delete: <DeleteIcon/>,
    mail: <MailOutlineIcon/>,
    search: <SearchIcon/>,
    download: <GetAppIcon/>,
    show: <VisibilityTwoToneIcon/>,
    upload: <PublishIcon/>,
    new: <AddCircleOutlineIcon/>,
    add_user: <PersonAddOutlinedIcon/>,
    user: <PersonOutlinedIcon/>
}
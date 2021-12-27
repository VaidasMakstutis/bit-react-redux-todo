import { Button, ButtonGroup} from "react-bootstrap";
import {filterTodo} from "../../Store/actions/TodoActions";
import {connect} from "react-redux";

const TopNav = (props) => {
    let {filterTodo} = props;
    return (
        <ButtonGroup>
            <Button variant="primary" onClick={()=>filterTodo('ALL')}>Visos uzduotys</Button>
            <Button variant="primary" onClick={()=>filterTodo('ACTIVE')}>Aktyvios uzduotys</Button>
            <Button variant="primary" onClick={()=>filterTodo('DONE')}>Pabaigtos uzduotys</Button>
        </ButtonGroup>
    )
}

export default connect (null, {filterTodo})(TopNav);
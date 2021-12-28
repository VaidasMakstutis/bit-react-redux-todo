import { Button, ButtonGroup} from "react-bootstrap";
import {filterTodo} from "../../Store/actions/TodoActions";
import {connect} from "react-redux";

const TopNav = (props) => {
    let {filterTodo} = props;
    return (
        <ButtonGroup>
            <Button variant="primary" onClick={()=>filterTodo('ALL')}>All tasks</Button>
            <Button variant="primary" onClick={()=>filterTodo('ACTIVE')}>Active tasks</Button>
            <Button variant="primary" onClick={()=>filterTodo('DONE')}>Done tasks</Button>
        </ButtonGroup>
    )
}

export default connect (null, {filterTodo})(TopNav);
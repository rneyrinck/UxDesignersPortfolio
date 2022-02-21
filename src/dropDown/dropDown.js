import { Link } from "react-router-dom"
import PartySquares from "../partySquares/partySquares"
import WorkFlow from "../workflow/workflow"

const DropDown = () => {
    return(
        <nav>
            <h6>Pages</h6>
            <div className="link-list">
                <Link to="/cover" element={<DropDown/>}>Cover</Link>
                <Link to='/partySquares' element={<PartySquares/>}>Party Squares</Link>
                <h6>--------------WIP--------------</h6>
                <Link to='/workflow' element={<WorkFlow/>}>Workflow</Link>
                {/* <Link to='/designartifacts' element={<DesignArtifacts/>}/>
                <h6>----------Backgrounds----------</h6>
                <Link to="/bio" element={<Bio/>}/>
                <Link to="/resume" element={<Resume/>}/> */}
            </div>
        </nav>
    )
}
export default DropDown
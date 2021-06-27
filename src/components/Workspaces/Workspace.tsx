import { stat } from "node:fs";
import { FC } from "react"
import { useSelector } from "react-redux";
import { useAppSelector } from "../..";
import { IWebsite } from "../../entities/website";
import { IState } from "../../reducers";
import { IWebsiteReducer } from "../../reducers/websiteReducer";
import ecosystem from '../../images/icons/ecosystem.svg'
import cog from '../../images/icons/cog.svg'

import './Workspace.scss';
import { ResumeWork } from "../ResumeWork/ResumeWork";


const Workspace: FC = () => {
    // const currentWorkspace = useSelector((state) => state);
    const { currentWorkspace } = useSelector<IState, IWebsiteReducer>(state => state.website);



    return (
        <div className="workspace-container">
            <div className="top-workspace">
                <img src="https://www.icgconstruction.com/sites/www.icgconstruction.com/files/assets/1484_06.jpg" alt="" />
                <img src={currentWorkspace[1]} alt={currentWorkspace[0]} />
                <h1>{currentWorkspace[0]}</h1>
            </div>
            <div className="middle-workspace-static">
                <h1>Start working on corporate matters</h1>
                <div className="static-panel">

                    <div className="static-single-panel">
                        <img src={currentWorkspace[1]} alt={currentWorkspace[0]} />
                        <h1>{`Explore your ${currentWorkspace[0]}`}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laborum! Ducimus, doloribus optio totam fugiat.</p>
                    </div>
                    <div className="static-single-panel">
                        <img src={ecosystem} alt={"ecosystem"} />
                        <h1>{`Explore your ecosystem`}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laborum! Ducimus, doloribus optio totam fugiat.</p>
                    </div>  <div className="static-single-panel">
                        <img src={cog} alt={"calendar"} />
                        <h1>{`Explore your calendar`}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laborum! Ducimus, doloribus optio totam fugiat.</p>
                    </div>
                </div>
            </div>

            <div className="bottom-with-search">
                < ResumeWork header={"Lastest updates"} isAdditionalOptions />

            </div>
        </div>)
}

export default Workspace;
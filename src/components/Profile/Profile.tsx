

import { FC, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IImageReducer } from "../../reducers/imageReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import "./profile.scss";

import message from '../../images/icons/house.png'
import { Link } from "react-router-dom";



const Profile: FC = () => {

    const [editableTop, setEditableTop] = useState(false)
    const [editableBottom, setEditableBottom] = useState(false);
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [file, setFile] = useState("sinetgubg");

    const { imageList } = useSelector<IState, IImageReducer>(state => ({
        ...state.photos
    }))
    const [corr, setCorr] = useState([[message, "Firsname Lastname"], [message, "Firstname Lastname"]])

    const table = [
        ["Operation Ti", "Renal co", "France", "Tax", "20/01/2017", "Racine"],
        ["Operation Ti", "Renal co", "France", "Tax", "20/01/2017", "Racine"],
        ["Operation Ti", "Renal co", "France", "Tax", "20/01/2017", "Racine"],

    ]
    const fees = [
        ["2019", "cs 153", 3500, "Clifford chance"],
        ["2019", "cs 153", 3500, "Clifford chance"],
        ["2019", "cs 153", 3500, "Clifford chance"],
        [null, "cs 153", 3500, "Clifford chance"],

    ]
    return (
        <div className="profile-container">
            <div className="profile-navbar">
                <div>
                    <img src={message} alt="Message" />
                    <p> Message</p>
                </div>
                <div>
                    <img src={message} alt="Message" />
                    <p> Create a request</p>
                </div>
                <div>
                    <img src={message} alt="Message" />
                    <p> Add to cluster</p>
                </div>
            </div>
            <div className="user-profile">
                <input type="image" src={message} className="editable-top" onClick={() => {
                    setEditableTop(!editableTop)
                }} />
                <div className="useImage">
                    <img src={imageList[0]?.url} alt="image" className="profileImage"></img>
                    <p>See profile</p>
                </div>
                <div className="user-Info">
                    <div>
                        <div contentEditable={editableTop} >{usersList[0]?.name}</div>
                        <div contentEditable={editableTop} >{usersList[0]?.company.name}</div>
                        <div contentEditable={editableTop}></div>
                        <div contentEditable={editableTop}>{usersList[0]?.company.catchPhrase}</div>
                        <div contentEditable={editableTop}>{usersList[0]?.email}</div>
                        <div contentEditable={editableTop}>{usersList[0]?.phone}</div>
                    </div>

                </div>

            </div>
            <div className="middle-user-profile">
                <input type="image" src={message} className="editable-top" onClick={() => {
                    setEditableBottom(!editableBottom)
                }} />
                <div className="editable">
                    <label>Expertise</label>
                    <div>
                        <p contentEditable={editableBottom}>Mergerrs</p>
                        <p contentEditable={editableBottom}>Mergerrs</p>
                        <p contentEditable={editableBottom}>Mergerrs</p>

                    </div>
                </div>
                <div className="editable">
                    <label>Admission </label>
                    <div>
                        <p contentEditable={editableBottom}>Cross border</p>
                        <p contentEditable={editableBottom}>Cross border</p>
                        <p contentEditable={editableBottom}>Cross border</p>

                    </div>
                </div>
                <div className="editable">
                    <label>Countries</label>
                    <div>
                        <p contentEditable={editableBottom}>Poland</p>
                        <p contentEditable={editableBottom}>Crossborder</p>
                        <p contentEditable={editableBottom}>Poland</p>

                    </div>
                </div>
            </div>
            <div className="bottom-user-profile">
                <div >
                    <div className="panel-informations">

                        <h1 >Panel informations </h1>

                        <div className="editable-div">
                            <p>Hourly fee </p>
                            <div contentEditable={editableBottom} >610$/hoyr</div>
                        </div>
                        <div className="editable-div no-border">
                            <p>Terms & conditions </p>
                            <div contentEditable={editableBottom} >Monthly retainer</div>
                            <div>
                                {file}
                            </div>
                            <div>

                                {editableBottom &&

                                    <input type="file" onChange={(e: any) => { setFile(e.target.files[0].name) }} />
                                }


                            </div>
                        </div>
                        <div className="editable-div">
                            <h1>Services & projects</h1>
                            <div contentEditable={editableBottom} >Corporate M&A and international qcquisitions </div>
                        </div>
                        <div className="editable-div">
                            <h1>Internal correspondants</h1>
                            {corr.map((el, ind) => {
                                return <Correspondants photo={el[0]} key={ind} name={el[1]} editable={editableBottom} />
                            })}
                            {
                                editableBottom &&
                                <div>
                                    Username: <input type="text" />
                                    Full name: <input type="text" />

                                </div>
                            }
                        </div>
                        <div className="center">

                            <div className="editable-table" >
                                <h1>Proposals </h1>
                                <table>
                                    <thead>
                                        <th>Name</th>
                                        <th>Entity</th>
                                        <th>Location</th>
                                        <th>Expertise</th>
                                        <th>Date</th>
                                        <th>Firm</th>
                                    </thead>
                                    {
                                        table.map((el, ind) => {
                                            return (
                                                <tr>
                                                    <td contentEditable={editableBottom}>{el[0]}</td>
                                                    <td contentEditable={editableBottom}>{el[1]}</td>
                                                    <td contentEditable={editableBottom}>{el[2]}</td>
                                                    <td contentEditable={editableBottom}>{el[3]}</td>
                                                    <td contentEditable={editableBottom}>{el[4]}</td>
                                                    <td contentEditable={editableBottom}>{el[5]}</td>
                                                </tr>
                                            )
                                        })

                                    }
                                </table>
                                <p>See more proposals</p>
                            </div>
                            <div className="editable-table">
                                <h1>Internal reviews </h1>
                                <table>
                                    <thead>
                                        <th>Name</th>
                                        <th>Entity</th>
                                        <th>Location</th>
                                        <th>Expertise</th>
                                        <th>Date</th>

                                    </thead>
                                    {
                                        table.map((el, ind) => {
                                            return (
                                                <tr>
                                                    <td contentEditable={editableBottom}>{el[0]}</td>
                                                    <td contentEditable={editableBottom}>{el[1]}</td>
                                                    <td contentEditable={editableBottom}>{el[2]}</td>
                                                    <td contentEditable={editableBottom}>{el[3]}</td>
                                                    <td contentEditable={editableBottom}>{el[4]}</td>

                                                </tr>
                                            )
                                        })

                                    }
                                </table>
                                <p>See more reviews</p>

                            </div>
                            <div className="editable-table">
                                <h1>Amount of fees</h1>
                                <table>
                                    <thead>
                                        <th>Year</th>
                                        <th>Cost center</th>
                                        <th>Total amount</th>
                                        <th>Law Firm</th>


                                    </thead>
                                    {
                                        fees.map((el, ind) => {
                                            return (
                                                <tr>
                                                    <td contentEditable={editableBottom}>{el[0]}</td>
                                                    <td contentEditable={editableBottom}>{el[1]}</td>
                                                    <td contentEditable={editableBottom}>{el[2]}</td>
                                                    <td contentEditable={editableBottom}>{el[3]}</td>
                                                </tr>
                                            )
                                        })

                                    }
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
type TcorrespondantsProps = {
    photo: string,
    name: string,
    editable: boolean

}
const Correspondants = ({ photo, name, editable }: TcorrespondantsProps) => {
    return (
        <div className="correspondants">
            <ProfileIcon photo={photo} />
            <div contentEditable={editable} >{name}</div>
            <Button img={message} text={"Message"} />
            <Button img={message} text={"Profile"} />

        </div>
    )
}

type TbuttonProps = {
    img?: string,
    text: string

}

const Button = ({ img, text }: TbuttonProps) => {
    return (
        <div className="image-button">
            {img &&
                <input type="image" src={img} alt={text} />
            }
            <p>{text}</p>
        </div>
    )
}

type TprofileIconProps = {
    photo: string,
    text?: string
}
export const ProfileIcon = ({ photo, text }: TprofileIconProps) => {
    return (
        <div>
            <Link to="/profile">
                <img src={photo} alt="Loading..." id="user-icon" />


                <p>{text}</p>
            </Link>
        </div>
    )
}




export default Profile
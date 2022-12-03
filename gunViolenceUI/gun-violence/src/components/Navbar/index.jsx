import React from "react";
import styled from 'styled-components';
import { GiPistolGun } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { TbReportSearch } from 'react-icons/tb';
import { MdTimeline } from 'react-icons/md';
import { Link } from "react-router-dom";





const NavBody = styled.div`
    position: fixed;
    background-color: #5591f2;
    width: 20%;
    height: 100%;

    p {
        line-spacing:1px;
        padding:0px;
        margin: 0px;
        text-align: center;
        font-family: Arial;
        font-weight: bold;
        color: white;

    }

    .piu {
        color:white;
        padding:10px;
        margin-top:20px;
        text-align: center;
        font-family: Arial;
        font-weight: bold;        
    }

    ul {
        list-style: none;
        margin-top: 40px;
        padding: 0px;
        a {
            text-decoration:none;
        }

        li {
            padding: 10px;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            margin-left: 10px;
            &:hover {
                background-color: #2273f5;
                cursor:pointer;
            }

            svg {
                padding: 0px;
                margin: 0px;
            }
        }

    }

    hr {
        opacity:0.2;
        margin-top: 20px;
    }

`;

const Logo = styled.div`
    background-color: white;
    height:50px;
    width: 50px;
    border-radius:50%;
    margin-top: 15px;
    margin-left: 30%;
    margin-bottom: 20px;
    padding:20px;

    .icon {
        margin: 5px;
    }

   





`;


const Navbar = () => {
    return (
        <NavBody >
            <Logo>
                <GiPistolGun size={40} className="icon" />
            </Logo>
            <p> GUN VIOLENCE ANALYZER </p>
            <p>&</p>
            <p>TRACKER</p>
            <hr />

            <ul>
                <Link to={"/dashboard"}>
                    <li>
                        <AiFillHome /> &nbsp;Home
                    </li>
                </Link>
                <Link to={"/map"}>
                    <li>
                        <SiGooglemaps /> &nbsp; Maps
                    </li>
                </Link>
                <Link to={"/report"}>
                    <li><TbReportSearch /> &nbsp; Reports </li>
                </Link>
                
                {/* <li><MdTimeline /> &nbsp; Past Years </li> */}
            </ul>


        </NavBody>
    )
}

export default Navbar;
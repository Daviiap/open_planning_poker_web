import React from "react";
import "./dashboard.css";
import { FiHome, FiUsers, FiMessageSquare, FiTarget, FiSettings, FiMoreHorizontal } from "react-icons/fi";
import Image from "next/image";

interface DashboardProps {
  userName: string;
  rooms: { id: string; name: string }[]; // Assuming each room has an id and name
  onNavigate: (path: string) => void;
}

export default function Dashboard({ userName, rooms, onNavigate }: DashboardProps) {
  return (
    <main className="dashboardContainer">
      <div className="dashboardTitle">Your Recent Games</div>

      <div className="roomList">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id} className="roomItem">
              <span>{room.name}</span>
              <button onClick={() => onNavigate(`/room/${room.id}`)}>Join Room</button>
            </div>
          ))
        ) : (
          <p>No rooms available</p>
        )}
      </div>


      <footer className="dashboardFooter">
        <div className="footerContent">
          <div className="userInfo">
            <Image
              src="/images/cards.svg"
              alt="cards"
              width={60}
              height={60}
              className="footerImage"
            />
            <div className="footerTitle">
              <div className="userName">{userName}</div>
              <div className="footerText">poker planning workspace</div>
            </div>

          </div>
          <hr className="divider" />

          <button className="footerButton" onClick={() => onNavigate('/dashboard')}>
            <FiHome className="icon" /> Home
          </button>
          <button className="footerButton" onClick={() => onNavigate('/groups')}>
            <FiUsers className="icon" /> Groups
          </button>
          <button className="footerButton" onClick={() => onNavigate('/organizations')}>
            <FiMessageSquare className="icon" /> Organizations
          </button>
          <button className="footerButton" onClick={() => onNavigate('/my-games')}>
            <FiTarget className="icon" /> My Games
          </button>

          <hr className="divider2" />
            <button className="footerButton" onClick={() => onNavigate('/dashboard')}>
              <FiMessageSquare className="icon" /> Notifications
            </button>
            <button className="footerButton" onClick={() => onNavigate('/settings')}>
              <FiSettings className="icon" /> Settings
            </button>
          <hr className="divider3" />
        </div>
        <div className="profileSection">
        <Image
          src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
          alt="User Profile"
          width={40}
          height={40}
          className="profileImage"
        />
        <span className="profileName">Jane Cooper</span>
        <FiMoreHorizontal className="profileOptions" />
      </div>
      </footer>
    </main>
  );
}
"use client";
import { ChatPage } from "@/components/Chat/ChatPage";
import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <div style={{ padding: "6rem 10px" }}>
      <ChatPage />
      <div style={{backgroundColor: "gray", padding: "20px", width: "60%", margin: "20px auto"}}>
        <h2>Dane kontaktowe</h2>
        <h3 style={{ textAlign: "center", padding: "10px" }}>
          tel: 881-449-770
        </h3>
      </div>
    </div>
  );
}

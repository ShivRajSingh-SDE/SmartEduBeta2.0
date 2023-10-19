import React, { useState, useRef, useEffect } from "react";
import App from "./App";
import { AiFillRobot, AiOutlineSlack } from "react-icons/ai";

const Main = () => {
  // const chatboxRef = useRef(null);
  // const [userMessage, setUserMessage] = useState("");
  // const [chatMessages, setChatMessages] = useState([]);
  // const [rotationAngle, setRotationAngle] = useState(0);
  // const [chatbotVisible, setChatbotVisible] = useState(false);

  // const API_KEY = "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";

  // const createChatLi = (message, className) => {
  //   const chatLi = (
  //     <li className={`chat ${className}`} key={chatMessages.length}>
  //       {className === "outgoing" ? (
  //         <div className="">
  //           <p>{message}</p>
  //         </div>
  //       ) : (
  //         <div className="needmsg">
  //           <span className="">
  //             <AiFillRobot id="bot" />
  //           </span>
  //           <p>{message}</p>
  //         </div>
  //       )}
  //     </li>
  //   );
  //   return chatLi;
  // };

  // const handleChat = () => {
  //   if (userMessage.trim() === "") return;

  //   const newMessages = [...chatMessages, userMessage];
  //   setChatMessages(newMessages);
  //   setUserMessage("");

  //   if (!newMessages.includes("Thinking...")) {
  //     setChatMessages([...newMessages, "Thinking..."]);
  //     chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

  //     setTimeout(() => generateResponse(userMessage), 600);
  //   }
  // };

  // const generateResponse = async (userMessage) => {
  //   const API_URL = "https://api.openai.com/v1/chat/completions";

  //   try {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${API_KEY}`,
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-3.5-turbo",
  //         messages: [{ role: "user", content: userMessage }],
  //       }),
  //     };

  //     const response = await fetch(API_URL, requestOptions);
  //     const data = await response.json();

  //     const responseMessage = data.choices[0].message.content.trim();
  //     if (responseMessage !== "") {
  //       setChatMessages((prevMessages) => [
  //         ...prevMessages.slice(0, prevMessages.length - 1),
  //         responseMessage,
  //       ]);
  //     }
  //   } catch (error) {
  //     console.error("Error generating response:", error);
  //   }
  // };

  // const handleChange = (event) => {
  //   setUserMessage(event.target.value);
  // };

  // const handleSendMessage = () => {
  //   handleChat();
  // };

  // const handleIconClick = () => {
  //   setChatbotVisible(!chatbotVisible);
  // };

  // useEffect(() => {
  //   chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  // }, [chatMessages]);

  // const chatbotClass = chatbotVisible ? "chatbot-visible" : "chatbot-hidden";

  return (
    <div>
      <App />
      {/* <div id="chatbotdiv">
        <div className="main">
          <header className="header">
            <h2 className="">AI Support</h2>
          </header>

          <div
            className="chatbox"
            style={{ maxHeight: "43vh", overflowY: "auto" }}
            ref={chatboxRef}
          >
            <ul>
              {chatMessages.map((message, index) => {
                if (message === "Thinking...") {
                  return createChatLi(message, "thinking");
                }
                return createChatLi(
                  message,
                  index % 2 === 0 ? "outgoing" : "incoming"
                );
              })}
            </ul>
          </div>

          <div className="flex">
            <textarea
              className="textarea"
              placeholder="Enter a message..."
              spellCheck="false"
              required
              value={userMessage}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            ></textarea>
            <span
              id="send-btn"
              className="material-symbols-rounded"
              onClick={handleSendMessage}
            >
              <AiOutlineSlack
                onClick={handleSendMessage}
                className={`text-[30px] transform rotate-${rotationAngle}`}
              />
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Main;

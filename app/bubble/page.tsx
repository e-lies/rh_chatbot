'use client';
import { BubbleChat } from 'flowise-embed-react'

const Bubble = () => {
    return (<>
        <h3 className="text-5xl font-bold">Cliquez sur l'icone pour démarrer le chat</h3>
        <BubbleChat
            chatflowid="38d2bf66-130a-43b6-b225-50f4ab96207a"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 20,
                    bottom: 20,
                    size: "medium",
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                chatWindow: {
                    welcomeMessage: "Hello! J'essaierai de répondre à tes questions liées aux RH",
                    backgroundColor: "#ffffff",
                    height: 720,
                    width: 560,
                    fontSize: 16,
                    poweredByTextColor: "#fff",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "/tq.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Question sur les RH...",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                    }
                }
            }}
        />
        </>
    );
};

export default Bubble;

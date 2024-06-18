This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Initialisation

Déployer FlowiseAI est nécessaire sur un serveur (local ou en ligne) avant de pouvoir utiliser le chatbot.
Afin d'installer Flowise sur ce serveur:
1. Installer FlowiseAI:
```
npm install -g flowise
```

2. Démarrer le serveur Flowise:
```
npx flowise start
```

3. Vérifier le port sur lequel Flowise est disponible.

## Déployer le chatbot

Cloner le projet, puis installer les dépendances:
```bash
git clone ......

npm install
```
### Builder le serveur Next.js
```bash
npm run build
```

### Démarrer le serveur Next.js
```bash
npm run start
# ou
yarn start
```
### Vérifier l'adresse URL du serveur Flowise et le configurer sur notre code:
```javascript
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
                    welcomeMessage: "Hello! This is custom welcome message",
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Type your question",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                    }
                }
            }}
        />

```

## Deployer sur une page existante

Ce composant chatBot peut être déployé indépendament sur un projet React ou Next en hébergeant le serveur Flowise en ligne avec des plateformes comme Render, Azure ou HuggingFace. Voir [Déploiement](https://docs.flowiseai.com/configuration/deployment).


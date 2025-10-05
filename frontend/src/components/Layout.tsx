import { Header } from "./Header";
import { ChatArea } from "./ChatArea";
import { InputArea } from "./InputArea";

export function Layout(props:any) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full bg-background">
        <ChatArea messages={props.messages}/>
        <InputArea onSend={props.onSend}/>
      </main>
    </div>
  );
}
